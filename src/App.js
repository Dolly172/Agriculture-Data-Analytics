import React from 'react';
import { MantineProvider, Table } from '@mantine/core';
import '@mantine/core/styles.css';
import data from './data';
import TableOne from './components/TableOne';
import TableTwo from './components/TableTwo';

const aggregateData = (data) => {
  const yearlyData = {};
  //  console.log(data.length);
  data.forEach((entry) => {
    const yearMatch = entry.Year.match(/\d{4}/);
    const year = yearMatch[0];
    const production = parseFloat(entry["Crop Production (UOM:t(Tonnes))"]) || 0;

    if (!yearlyData[year]) {
      yearlyData[year] = { maxCrop: entry["Crop Name"], maxProduction: production, minCrop: entry["Crop Name"], minProduction: production };
    } else {
      if (production > yearlyData[year].maxProduction) {
        yearlyData[year].maxCrop = entry["Crop Name"];
        yearlyData[year].maxProduction = production;
      }
      if (production < yearlyData[year].minProduction && production !== 0) {
        yearlyData[year].minCrop = entry["Crop Name"];
        yearlyData[year].minProduction = production;
      }
    }
  });

  return yearlyData;
};


const calculateAverages = (data) => {
  const cropData = {};

  data.forEach((entry) => {
    const crop = entry["Crop Name"];
    const yieldValue = parseFloat(entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0;
    const areaValue = parseFloat(entry["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0;

    if (!cropData[crop]) {
      cropData[crop] = { totalYield: 0, totalArea: 0, count: 0 };
    }

    cropData[crop].totalYield += yieldValue;
    cropData[crop].totalArea += areaValue;
    cropData[crop].count += 1;
  });

  const averages = Object.keys(cropData).map((crop) => {
    const { totalYield, totalArea, count } = cropData[crop];
    return {
      crop,
      averageYield: totalYield / count,
      averageArea: totalArea / count
    };
  });

  return averages;
};

const App = () => {
  const aggregatedData = aggregateData(data);
  const averageData = calculateAverages(data);
  
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
    <div>
      <h1>Yearly Crop Data</h1>
      <TableOne data={aggregatedData}/>
      <h1>Crop Averages between 1950-2020</h1>
      <TableTwo data={averageData} />
    </div>
  </MantineProvider>

  );
};

export default App;
