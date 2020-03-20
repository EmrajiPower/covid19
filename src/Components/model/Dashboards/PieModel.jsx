import React from "react";
import Plot from "react-plotly.js";

class PieModel extends React.Component {
  render() {
    const { title, values, labels, width, height } = this.props;

    console.log("classes", <Plot.layout />);

    return (
      <Plot
        style={{ width: "100%", height: "100%" }}
        data={[
          {
            values,
            labels,
            hole: 0.8,
            type: "pie"
          }
        ]}
        config={{
          displayModeBar: false,
          responsive: true
        }}
        layout={{
          width,
          height,
          title,
          paper_bgcolor: "#27496d",
          font: {
            family: "Roboto",
            size: 15,
            color: "black"
          },
          legend: { orientation: "h" }
        }}
      />
    );
  }
}

export default PieModel;
