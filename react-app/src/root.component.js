import Parcel from "single-spa-react/parcel";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <Parcel
        config={() => System.import("@app/react-parcel")}
        customProp1="Parent prop1"
        wrapWith="h1"
        wrapStyle={{ color: "blue" }}
        parcelDidMount={() => console.log("parcel mounted")}
      />
      <div id="sample"></div>
    </section>
  );
}
