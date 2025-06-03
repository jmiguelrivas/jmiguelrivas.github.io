import 'nano-grid/dist/nanogrid.js'
import gColors from 'nano-grid/dist/gcolors.js'

function Edit() {
  return (
    <section className="edit">
      <nn-caja
        padding="1rem"
        max-width="600px"
      >
        <h1>Add / Edit User</h1>
        <form action="">
          <fieldset>
            <legend>Names</legend>

            <ul className="repeater">
              <li>
                <nn-fila>
                  <nn-pilar
                    size="35px"
                    className="index"
                  >
                    1
                  </nn-pilar>
                  <nn-pilar size="100% - 35px * 2">
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                    />
                  </nn-pilar>
                  <nn-pilar size="35px">
                    <nn-btn color="#ff5555">X</nn-btn>
                  </nn-pilar>
                </nn-fila>
              </li>
            </ul>

            <nn-btn color={gColors['spanish-green'].hex}>
              + Add Another Name
            </nn-btn>
          </fieldset>

          <fieldset>
            <legend>Family Names</legend>

            <ul className="repeater">
              <li>
                <nn-fila>
                  <nn-pilar
                    size="35px"
                    className="index"
                  >
                    1
                  </nn-pilar>
                  <nn-pilar size="100% - 35px * 2">
                    <input
                      type="text"
                      name="family_name"
                      autoComplete="off"
                    />
                  </nn-pilar>
                  <nn-pilar size="35px">
                    <nn-btn color="#ff5555">X</nn-btn>
                  </nn-pilar>
                </nn-fila>
              </li>
            </ul>

            <nn-btn color={gColors['spanish-green'].hex}>
              + Add Another Family Name
            </nn-btn>
          </fieldset>

          <fieldset>
            <label>
              <input
                type="checkbox"
                name="adopted"
              />
              <span>Adopted</span>
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="parent_a">Guardian/Parent A</label>
            <select
              name="parent_a"
              id="parent_a"
            >
              <option value="1">1</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="parent_b">Guardian/Parent B</label>
            <select
              name="parent_b"
              id="parent_b"
            >
              <option value="1">1</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="lead_family_name">Lead Family Name</label>
            <select
              name="lead_family_name"
              id="lead_family_name"
            >
              <option value="1">Parent A</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Relationships</legend>

            <ul className="repeater">
              <li>
                <nn-fila>
                  <nn-pilar
                    size="35px"
                    className="index"
                  >
                    1
                  </nn-pilar>
                  <nn-pilar size="100% - 35px * 2">
                    <select name="relationship">
                      <option value="1">1</option>
                    </select>
                  </nn-pilar>
                  <nn-pilar size="35px">
                    <nn-btn color="#ff5555">X</nn-btn>
                  </nn-pilar>
                </nn-fila>
              </li>
            </ul>

            <nn-btn color={gColors['spanish-green'].hex}>
              + Add Another Relationship
            </nn-btn>
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

export default Edit
