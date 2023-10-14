import { Button, Input, Rating, Typography } from "@mui/material";
import { useState } from "react";
import close from "../../../../assets/icons/close.svg";
import ReactDOM from "react-dom";
import "./Modal.scss";

interface ModalProps {
  id: number;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<any>>;
}

export const Modal = ({ id, show, setShow }: ModalProps) => {
  const [data, setData] = useState({ name: "", rating: 1, comment: "" });

  const onDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onCommentSave = () => {
    const comments = JSON.parse(localStorage.getItem(`${id}`) || `[]`);
    let newComments = [...comments, JSON.stringify(data)];
    localStorage.setItem(`${id}`, JSON.stringify(newComments));
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <img
          className="modal__close"
          src={close}
          onClick={() => setShow(false)}
          alt="close"
        />
        <Typography>Ваше имя</Typography>
        <Input
          className="modal__input"
          name="name"
          onChange={onDataChange}></Input>
        <Typography>Комментарий</Typography>
        <Input
          className="modal__input"
          onChange={onDataChange}
          name="comment"></Input>
        <Rating
          value={data.rating}
          defaultValue={1}
          onChange={(event, newValue) => {
            setData((prev) => ({ ...prev, rating: newValue || 1 }));
          }}
          size="large"
          className="modal__rating"
        />

        <Button
          onClick={onCommentSave}
          className="modal__button"
          variant="contained"
          color="primary">
          Отправить
        </Button>
      </div>
    </div>,
    document.body
  );
};
