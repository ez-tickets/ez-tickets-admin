import { useEditProductStore } from "@/admin/screen/Product/components/Product.tsx";
import { editModalStyle } from "@/admin/screen/Product/components/style/EditModal.css.ts";
import { IconX } from "@tabler/icons-react";
import { type ChangeEvent, Fragment, useState } from "react";

type EditModalProps = {
  setIsFlag: (flag: boolean) => void;
};

function EditModal({ setIsFlag }: EditModalProps) {
  const { product } = useEditProductStore();
  if (!product) throw new Error("Product not found.");

  const [copyProduct, setCopyProduct] = useState(structuredClone(product));
  const [editName, setEditName] = useState<string>(product.prod.name);
  const [editPrice, setEditPrice] = useState<number>(product.prod.price);
  const [editQuantity, setEditQuantity] = useState<number>(
    product.prod.quantity,
  );

  const editPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
    if (isNaN(value) || value < 0) return;
    setEditPrice(value);
  };

  const editQuantityHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
    if (isNaN(value) || value < 0) return;
    setEditQuantity(value);
  };

  const deleteOptionHandler = (optId: string) => {
    const deletedOptions = copyProduct.options.filter(
      (option) => option.id !== optId,
    );
    const newProduct = { ...copyProduct, options: deletedOptions };
    setCopyProduct(newProduct);
  };

  return (
    <Fragment>
      <div className={editModalStyle.overlay}>
        <div>
          <h1 className={editModalStyle.title}>編集モード</h1>
        </div>
        <IconX
          className={editModalStyle.closeIcon}
          color={"red"}
          onClick={() => setIsFlag(false)}
        />

        <div className={editModalStyle.editScreen}>
          <div className={editModalStyle.inputContainer}>
            <div className={editModalStyle.inputTitle}>
              <label htmlFor="prodName">商品名</label>
            </div>
            <div className={editModalStyle.inputValue}>
              <input
                className={editModalStyle.input}
                id={"prodName"}
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
          </div>

          <div className={editModalStyle.inputContainer}>
            <div className={editModalStyle.inputTitle}>
              <label htmlFor="prodPrice">価格</label>
            </div>
            <div className={editModalStyle.inputValue}>
              <input
                className={editModalStyle.input}
                id={"prodPrice"}
                type="text"
                placeholder="数値を入力"
                value={editPrice}
                onChange={(e) => editPriceHandler(e)}
              />
            </div>
          </div>

          <div className={editModalStyle.inputContainer}>
            <div className={editModalStyle.inputTitle}>
              <label htmlFor="prodQuantity">在庫数</label>
            </div>
            <div className={editModalStyle.inputValue}>
              <input
                className={editModalStyle.input}
                id={"prodQuantity"}
                type="text"
                placeholder="数値を入力"
                value={editQuantity}
                onChange={(e) => editQuantityHandler(e)}
              />
            </div>
          </div>

          {copyProduct.options.map((option, index) => (
            <div className={editModalStyle.inputContainer} key={option.id}>
              <div className={editModalStyle.inputOptionTitle}>
                <label htmlFor={`prodOption${index + 1}`}>
                  オプション{index + 1}
                </label>
              </div>
              <IconX
                className={editModalStyle.optionDeleteIcon}
                color={"red"}
                onClick={() => deleteOptionHandler(option.id)}
              />
              <div className={editModalStyle.inputValue}>
                <input
                  className={editModalStyle.input}
                  id={`prodOption${index + 1}`}
                  type="text"
                  value={option.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default EditModal;