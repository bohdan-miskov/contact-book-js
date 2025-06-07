import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/operations";
import { setEditId } from "../../redux/contacts/slice";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => dispatch(removeContact(id));
  const handleSetEditContact = (id) => dispatch(setEditId(id));

  return (
    <li className={css.container}>
      <div>
        <div>
          <IoPerson className={css.icon} />
          <p className={css.info}>{name}</p>
        </div>
        <div>
          <BsFillTelephoneFill className={css.icon} />
          <a className={css.info} href={`tel:${number}`}>
            {number}
          </a>
        </div>
      </div>
      <ul className={css.btnList}>
        <li>
          <button
            className={css.btnOps}
            type="button"
            onClick={() => handleSetEditContact(id)}
          >
            <CiEdit />
          </button>
        </li>
        <li>
          <button
            className={css.btnOps}
            type="button"
            onClick={() => handleDeleteContact(id)}
          >
            <MdDelete />
          </button>
        </li>
      </ul>
    </li>
  );
}
