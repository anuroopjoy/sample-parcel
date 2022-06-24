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
        handleError={err => console.log(err)}
        parcelDidMount={() => console.log("React parcel mounted")}
      />
      <Parcel
        config={() => System.import("@app/angular-parcel")}
        customProp1="Parent prop1"
        wrapWith="h1"
        wrapStyle={{ color: "green" }}
        handleError={err => console.log(err)}
        parcelDidMount={() => console.log("Angular parcel mounted")}
      />
    </section>
  );
}
