import 'nano-grid/dist/nanogrid.js'
import gColors from 'nano-grid/dist/gcolors.js'
import { useForm, useFieldArray } from 'react-hook-form'
import Repeater from '../components/Repeater'

const users = [
  {
    id: 1,
    full_name: 'Joan Manuel Serrat',
  },
  {
    id: 2,
    full_name: 'Juana La Cubana',
  },
  {
    id: 3,
    full_name: 'Marcela Duran',
  },
]

const family_names = [
  {
    id: 1,
    family_name: 'Santos',
  },
  {
    id: 2,
    family_name: 'Rivas',
  },
  {
    id: 3,
    family_name: 'Solis',
  },
]

export default function () {
  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      names: [{ value: '' }],
      family_names: [{ value: '' }],
      relationships: [{ value: '' }],
    },
  })

  const {
    fields: nameFields,
    append: appendName,
    remove: removeName,
  } = useFieldArray({
    control,
    name: 'names',
  })

  const {
    fields: familyNameFields,
    append: appendFamilyName,
    remove: removeFamilyName,
  } = useFieldArray({
    control,
    name: 'family_names',
  })

  const {
    fields: relationshipsFields,
    append: appendRelationship,
    remove: removeRelationship,
  } = useFieldArray({
    control,
    name: 'relationships',
  })

  const parentA = watch('parent_a')
  const parentB = watch('parent_b')

  function getUser(id) {
    return users.find(u => +u.id === +id)
  }

  const parents = [getUser(parentA), getUser(parentB)].filter(Boolean)

  const onSubmit = data => console.log(data)

  return (
    <section className="edit">
      <nn-caja
        padding="1rem"
        max-width="600px"
      >
        <h1>Add / Edit User</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Names</legend>

            <Repeater
              fields={nameFields}
              append={appendName}
              remove={removeName}
              register={register}
              namePrefix="names"
            >
              <nn-btn
                type="button"
                color={gColors['spanish-green'].hex}
                onClick={() => appendName({ value: '' })}
              >
                + Add Another Name
              </nn-btn>
            </Repeater>
          </fieldset>

          <fieldset>
            <legend>Family Names</legend>

            <Repeater
              fields={familyNameFields}
              append={appendFamilyName}
              remove={removeFamilyName}
              register={register}
              namePrefix="family_names"
              options={family_names}
              labelProp="family_name"
              valueProp="id"
            >
              <nn-btn
                type="button"
                color={gColors['spanish-green'].hex}
                onClick={() => appendFamilyName({ value: '' })}
              >
                + Add Another Family Name
              </nn-btn>
            </Repeater>
          </fieldset>

          <fieldset>
            <label htmlFor='DOB'>Date of Birth</label>
            <input
              type="date"
              id="DOB"
              {...register('DOB')}
            />
          </fieldset>

          <fieldset>
            <label>
              <input
                type="checkbox"
                {...register('adopted')}
              />
              <span>Adopted</span>
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="parent_a">Guardian/Parent A</label>
            <select
              id="parent_a"
              {...register('parent_a')}
            >
              {users.map(user => (
                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.full_name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="parent_b">Guardian/Parent B</label>
            <select
              id="parent_b"
              {...register('parent_b')}
            >
              {users.map(user => (
                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.full_name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="lead_family_name">Lead Family Name</label>
            <select
              id="lead_family_name"
              {...register('lead_family_name')}
            >
              {parents.map(user => (
                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.full_name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset>
            <legend>Relationships</legend>

            <Repeater
              fields={relationshipsFields}
              append={appendRelationship}
              remove={removeRelationship}
              register={register}
              namePrefix="relationships"
              options={users}
              labelProp="full_name"
              valueProp="id"
            >
              <nn-btn
                type="button"
                color={gColors['spanish-green'].hex}
                onClick={() => appendRelationship({ value: '' })}
              >
                + Add Another Relationship
              </nn-btn>
            </Repeater>
          </fieldset>

          <nn-btn
            type="submit"
            color={gColors['sunglow'].hex}
          >
            Add/Edit User
          </nn-btn>
        </form>
      </nn-caja>
    </section>
  )
}
