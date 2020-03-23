import React from "react";
import Plot from "react-plotly.js";

class PieModel extends React.Component {
  render() {
    const { title, values, labels, width, height } = this.props;

    console.log("classes", <Plot.layout />);

    return (
      <Plot
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%"
        }}
        data={[
          {
            values,
            labels,
            showlegend: false,
            hole: 0.7,
            type: "pie",
            textfont: {
              family: "Roboto",
              size: 18,
              color: "skyblue"
            },
            marker: {
              colors: ["orange", "red", "green"]
            },
            textinfo: "none"
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
            color: "antiquewhite"
          },
          legend: { orientation: "h" }
        }}
      />
    );
  }
}

export default PieModel;
