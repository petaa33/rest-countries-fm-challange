import style from "./fullWidth.module.css"

interface IFullWidth {
    children: React.ReactNode
}

const FullWidth: React.FC<IFullWidth> = ({children}) => {
  return (
    <div className={style.container}>
        {children}
    </div>
  )
}

export default FullWidth