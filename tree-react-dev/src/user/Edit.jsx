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
].map(({ id, full_name }) => ({
  id,
  value: id,
  label: full_name,
}))

export default function () {
  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: {
      names: [{ value: '' }],
      family_names: [{ value: '' }],
      parents: [{ value: '' }],
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
    fields: parentsFields,
    append: appendParent,
    remove: removeParent,
  } = useFieldArray({
    control,
    name: 'parents',
  })

  const {
    fields: relationshipsFields,
    append: appendRelationship,
    remove: removeRelationship,
  } = useFieldArray({
    control,
    name: 'relationships',
  })

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
              setValue={setValue}
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
            <label>
              <span>Prefered Name</span>
              <input
                type="text"
                {...register('p_name')}
              />
            </label>
          </fieldset>

          <fieldset>
            <label>
              <span>Nickname</span>
              <input
                type="text"
                {...register('nickname')}
              />
            </label>
          </fieldset>

          <fieldset>
            <label>
              <span>Date of Birth</span>
              <input
                type="date"
                {...register('DOB')}
              />
            </label>
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
            <legend data-tooltip="Sort by family name order">Parents</legend>

            <Repeater
              fields={parentsFields}
              append={appendParent}
              remove={removeParent}
              setValue={setValue}
              register={register}
              check={true}
              checkLabel="Ignore this family name"
              namePrefix="parents"
              options={users}
              labelProp="full_name"
              valueProp="id"
            >
              <nn-btn
                type="button"
                color={gColors['spanish-green'].hex}
                onClick={() => appendParent({ value: '' })}
              >
                + Add Another Parent
              </nn-btn>
            </Repeater>
          </fieldset>

          <fieldset>
            <legend data-tooltip="only use if they are no parents">
              Family Names
            </legend>

            <Repeater
              fields={familyNameFields}
              append={appendFamilyName}
              setValue={setValue}
              remove={removeFamilyName}
              register={register}
              namePrefix="family_names"
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
            <legend>Relationships</legend>

            <Repeater
              fields={relationshipsFields}
              append={appendRelationship}
              remove={removeRelationship}
              setValue={setValue}
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
