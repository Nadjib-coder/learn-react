export default function Die(props) {
  const className = `${props.isHeld ? 'die hold' : 'die'}`;
  return <button className={className}>{props.value}</button>;
}
