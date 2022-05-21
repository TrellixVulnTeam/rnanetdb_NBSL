// import * as d3 from "https://cdn.skypack.dev/d3@7";
import * as d3 from "d3";

import { useContext, useEffect } from "react";
import { Store } from "../../utils/store";

function Histogram() {

    const {
        state: { data: structures },
    } = useContext(Store);

    useEffect(() => {
        //Get all structures resolutions
        const resolutions = structures?.map((structure) => structure.resolution);

        const min = d3.min(resolutions);
        const max = d3.max(resolutions);
        const domain = [min, max];

        const margin = { top: 30, right: 30, bottom: 30, left: 50 },
            width = 400 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        // The number of bins
        const Nbin = 10;

        const x = d3.scaleLinear().domain(domain).range([0, width]);

        const histogram = d3
            .histogram()
            .domain(x.domain()) // then the domain of the graphic
            .thresholds(x.ticks(Nbin)); // then the numbers of bins

        // And apply this function to data to get the bins
        const bins = histogram(resolutions);

        // Add the svg element to the body and set the dimensions and margins of the graph
        const svg = d3
            .select('#histogram')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        svg
            .append('g')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(x));

        const y = d3
            .scaleLinear()
            .range([height, 0])
            .domain([
                0,
                d3.max(bins, function (d) {
                    return d.length;
                }),
            ]);

        svg.append('g').call(d3.axisLeft(y));

        svg
            .selectAll('rect')
            .data(bins)
            .enter()
            .append('rect')
            .attr('x', 1)
            .attr('transform', function (d) {
                return 'translate(' + x(d.x0) + ',' + y(d.length) + ')';
            })
            .attr('width', function (d) {
                return x(d.x1) - x(d.x0) - 1;
            })
            .attr('height', function (d) {
                return height - y(d.length);
            })
            .style('fill', '#69b3a2');

        return () => {
            // d3.selectAll('svg').remove();
        };
    }, [structures]);
    return (
        <div id="histogram"></div>
    )
}

export default Histogram