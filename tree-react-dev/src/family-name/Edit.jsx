import 'nano-grid/dist/nanogrid.js'
import gColors from 'nano-grid/dist/gcolors.js'
import { useForm, useFieldArray } from 'react-hook-form'

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
  const { handleSubmit, register } = useForm({
    defaultValues: {
    },
  })

  const onSubmit = data => console.log(data)

  return (
    <section className="edit">
      <nn-caja
        padding="1rem"
        max-width="600px"
      >
        <h1>Add / Edit Family Name</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
  

          <fieldset>
            <label htmlFor='family_name'>Family Name</label>
            <input
              type="text"
              {...register('family_name')}
            />
          </fieldset>

          <nn-btn
            type="submit"
            color={gColors['sunglow'].hex}
          >
            Add/Edit Family Name
          </nn-btn>
        </form>
      </nn-caja>
    </section>
  )
}
