const ToggleDone = ({toggleDone , item}) => {
    return (
        <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleDone(item.id)} />
    );
}

export default ToggleDone;