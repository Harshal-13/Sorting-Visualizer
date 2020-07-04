import React, { Component } from "react";
import "./Body.css";

class Body extends Component {
  render() {
    const {
      array,
      currentBubbleTwo,
      currentQuickTwo,
      pivot,
      currentSwappers,
      currentHeapThree,
      currentSorted,
      currentMergeX,
    } = this.props;
    const numWidth = Math.floor(window.innerWidth / (array.length * 2));
    const width = `${numWidth}px`;
    const numMargin =
      array.length <= 10
        ? 12
        : array.length < 15
        ? 8
        : array.length < 20
        ? 6
        : array.length < 40
        ? 4
        : array.length < 80
        ? 3.5
        : array.length < 160
        ? 3
        : array.length < 200
        ? 2.5
        : 2;
    const margin = `${numMargin}px`;
    const color = numWidth > 20 ? "black" : "transparent";
    const numFont =
      numWidth > 70
        ? 20
        : numWidth > 60
        ? 18
        : numWidth > 50
        ? 16
        : numWidth > 40
        ? 14
        : numWidth > 30
        ? 12
        : numWidth > 20
        ? 10
        : 8;
    const fontSize = `${numFont}px`;

    return (
      <div id="bodyContainer">
        {array.length
          ? array.map((number, index) => {
              const backgroundColor = currentSwappers.includes(index)
                ? "rgba(219, 57, 57, 0.8)"
                : currentBubbleTwo.includes(index) ||
                  currentQuickTwo.includes(index) ||
                  currentHeapThree.includes(index) ||
                  currentMergeX.includes(index)
                ? "rgba(78, 216, 96, 0.8)"
                : pivot === index
                ? "rgba(237, 234, 59, 0.8)"
                : currentSorted.includes(index)
                ? "rgba(169, 92, 232, 0.8)"
                : "rgba(66, 134, 244, 0.8)";

              return (
                <div
                  className="arrayElement"
                  key={index}
                  style={{
                    height: `${number * 3}px`,
                    width: width,
                    marginLeft: margin,
                    backgroundColor: backgroundColor,
                    color: color,
                    fontSize: fontSize,
                  }}
                >
                  {number}
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Body;
