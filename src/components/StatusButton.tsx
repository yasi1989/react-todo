const StatusButton = ({status}:{status: boolean}) => {
    const buttonProps = status ?
        { text: "completed", color: "bg-green-200"} :
        { text: "pending", color: "bg-blue-200"};
  return (
    <button className={`py-2 px-4 text-sm rounded-md ${buttonProps.color}`}>
      {buttonProps.text}
    </button>
  )
}

export default StatusButton
