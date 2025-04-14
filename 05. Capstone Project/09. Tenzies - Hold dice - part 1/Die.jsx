export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white',
  };

  return (
    <button
      style={styles}
      // onClick={props.hold} // this is for the first way
      onClick={() => props.hold(props.id)} // and this is the second way and for me i prefer the first way because it reduce the amount of props that we pass into this Die
    >
      {props.value}
    </button>
  );
}
