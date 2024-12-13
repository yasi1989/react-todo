const StatusButton = ({status}:{status: boolean}) => {
  return (
    status ? <button className="py-2 px-4 bg-green-200 text-sm rounded-md">completed</button> : <button className="py-2 px-4 bg-blue-200 text-sm rounded-md">pending</button>
  )
}

export default StatusButton
