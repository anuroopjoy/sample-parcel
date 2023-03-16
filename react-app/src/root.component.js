import Parcel from "single-spa-react/parcel";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <Parcel
        config={() => System.import("@app/react-parcel")}
        customProp1="Parent prop1 to react"
        wrapWith="h1"
        wrapStyle={{ color: "blue" }}
        handleError={err => console.log(err)}
        parcelDidMount={() => console.log("React parcel mounted")}
      />
      <Parcel
        config={() => System.import("@app/angular-parcel")}
        customProp1="Parent prop1 to angular"
        wrapWith="h1"
        wrapStyle={{ color: "green" }}
        handleError={err => console.log(err)}
        parcelDidMount={() => console.log("Angular parcel mounted")}
      />
      <Parcel
        config={() => System.import("@app/vue-parcel")}
        customProp1="Parent prop1 to vue"
        wrapWith="h1"
        wrapStyle={{ color: "yellow" }}
        handleError={err => console.log(err)}
        parcelDidMount={() => console.log("Vue parcel mounted")}
      />
    </section>
  );
}
