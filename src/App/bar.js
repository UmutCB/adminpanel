// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import React from 'react'
import { Sidebar } from './Sidebar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        valueFormat={{ format: ' >-', enabled: false }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
const data = [
    {
      "country": "AD",
      "hot dog": 20,
      "hot dogColor": "hsl(258, 70%, 50%)",
      "burger": 15,
      "burgerColor": "hsl(309, 70%, 50%)",
      "sandwich": 69,
      "sandwichColor": "hsl(126, 70%, 50%)",
      "kebab": 44,
      "kebabColor": "hsl(158, 70%, 50%)",
      "fries": 111,
      "friesColor": "hsl(96, 70%, 50%)",
      "donut": 190,
      "donutColor": "hsl(160, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 88,
      "hot dogColor": "hsl(264, 70%, 50%)",
      "burger": 20,
      "burgerColor": "hsl(12, 70%, 50%)",
      "sandwich": 116,
      "sandwichColor": "hsl(98, 70%, 50%)",
      "kebab": 120,
      "kebabColor": "hsl(296, 70%, 50%)",
      "fries": 122,
      "friesColor": "hsl(356, 70%, 50%)",
      "donut": 15,
      "donutColor": "hsl(345, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 52,
      "hot dogColor": "hsl(105, 70%, 50%)",
      "burger": 120,
      "burgerColor": "hsl(49, 70%, 50%)",
      "sandwich": 147,
      "sandwichColor": "hsl(79, 70%, 50%)",
      "kebab": 25,
      "kebabColor": "hsl(232, 70%, 50%)",
      "fries": 103,
      "friesColor": "hsl(231, 70%, 50%)",
      "donut": 25,
      "donutColor": "hsl(174, 70%, 50%)"
    },
    {
      "country": "AU",
      "hot dog": 103,
      "hot dogColor": "hsl(92, 70%, 50%)",
      "burger": 46,
      "burgerColor": "hsl(80, 70%, 50%)",
      "sandwich": 29,
      "sandwichColor": "hsl(325, 70%, 50%)",
      "kebab": 198,
      "kebabColor": "hsl(281, 70%, 50%)",
      "fries": 40,
      "friesColor": "hsl(119, 70%, 50%)",
      "donut": 41,
      "donutColor": "hsl(160, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 186,
      "hot dogColor": "hsl(80, 70%, 50%)",
      "burger": 89,
      "burgerColor": "hsl(189, 70%, 50%)",
      "sandwich": 37,
      "sandwichColor": "hsl(265, 70%, 50%)",
      "kebab": 152,
      "kebabColor": "hsl(220, 70%, 50%)",
      "fries": 162,
      "friesColor": "hsl(261, 70%, 50%)",
      "donut": 194,
      "donutColor": "hsl(301, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 63,
      "hot dogColor": "hsl(129, 70%, 50%)",
      "burger": 3,
      "burgerColor": "hsl(307, 70%, 50%)",
      "sandwich": 110,
      "sandwichColor": "hsl(297, 70%, 50%)",
      "kebab": 121,
      "kebabColor": "hsl(131, 70%, 50%)",
      "fries": 146,
      "friesColor": "hsl(255, 70%, 50%)",
      "donut": 14,
      "donutColor": "hsl(321, 70%, 50%)"
    },
    {
      "country": "AB",
      "hot dog": 120,
      "hot dogColor": "hsl(247, 70%, 50%)",
      "burger": 94,
      "burgerColor": "hsl(359, 70%, 50%)",
      "sandwich": 118,
      "sandwichColor": "hsl(324, 70%, 50%)",
      "kebab": 165,
      "kebabColor": "hsl(295, 70%, 50%)",
      "fries": 142,
      "friesColor": "hsl(182, 70%, 50%)",
      "donut": 69,
      "donutColor": "hsl(327, 70%, 50%)"
    }
  ]
  export class Bar extends React.Component{
      render() {
          return(
              <div>

        <Sidebar/>
              <div style={{height:"250px", position:"absolute",  width:"80%", left:"200px"}}>
                  
                
                  <MyResponsiveBar data={data}/>
               
                
              </div>
              </div>
          )
      }
  }