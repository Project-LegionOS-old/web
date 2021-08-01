import './button.css';

export default function Button({
    title, action
}) {
    return (
    <div className="buttonContainer" onClick={action ? action : null}>
      <p>{title}</p>
    </div>
    )
}