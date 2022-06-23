export default function ParcelComponent(props) {
  return (
    <section>
      Parcel component with {props.name} is mounted!
      <br />
      Passed props from Parent
      <div style={{ color: "red" }}>{props.customProp1}</div>
    </section>
  );
}
