function Button({name, onClick, focus}: {name:string, onClick:any, focus:boolean}) {
  const colorButton = focus ? 'bg-green-500' : 'bg-red-500 hover:bg-gray-500 opacity-70'

    return (
      <>
        <div onClick={onClick} className={`${colorButton} rounded-lg border-red-500`}>
          <p>
            {name}
          </p>
        </div>
      </>
    )
  }

  export default Button