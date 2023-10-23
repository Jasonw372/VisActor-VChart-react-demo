import { VChart, IVChart, IBarChartSpec } from "@visactor/vchart";
import { Component, createRef } from "react";

export interface BarChartProps {
  colors?: string[];
  data: any[];
}

export class BarChart extends Component<BarChartProps> {
  chart?: IVChart;

  parseSpec = () => {
    const colors = this.props.colors;
    return {
      type: "bar",
      data: [
        {
          id: "barData",
          values: this.props.data
        }
      ],
      xField: "name",
      yField: "value",
      color: {
        type: "ordinal",
        domain: [],
        range: colors
      }
    } as IBarChartSpec;
  };

  containerRef = createRef<HTMLDivElement>();

  createOrUpdateChart() {
    if (this.containerRef.current && !this.chart) {
      const chart = new VChart(this.parseSpec(), {
        dom: this.containerRef.current
      });
      chart.renderAsync();

      this.chart = chart;
    } else if (this.chart) {
      this.chart.updateSpec(this.parseSpec() as any);
      this.chart.renderAsync();
    }
  }

  componentDidMount() {
    this.createOrUpdateChart();
  }

  componentDidUpdate(prevProps: BarChartProps) {
    if (
      (this.props.colors && prevProps.colors !== this.props.colors) ||
      prevProps.data !== this.props.data
    ) {
      this.createOrUpdateChart();
    }
  }

  componentWillUnmout() {
    if (this.chart) {
      this.chart.release();
    }
  }

  render() {
    return (
      <div
        id="bar-container"
        style={{ width: "100%", height: 300 }}
        ref={this.containerRef}
      />
    );
  }
}
