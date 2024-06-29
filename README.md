# Agriculture Data Analytics Project

This project visualizes Indian Agriculture Data (made available by National Data and Analytics Platform, NITI Aayog) in a tabular format using React and Mantine. The data includes information on crop production, yield, and cultivation areas for different crops over several years.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (v14 or later) and npm (v6 or later) or Yarn (v1 or later).
- You have a compatible code editor (e.g., VS Code).

## Getting Started

Follow these steps to set up and run the project:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Dolly172/Agriculture-Data-Analytics.git
   cd https://github.com/Dolly172/Agriculture-Data-Analytics.git

2. **Install dependencies**

   - yarn install

3. **Run the project**

   - yarn start

   - This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. **Build the project**

   - yarn build

## Project Structure 

- `src/`: This directory contains the source code.
  - `App.js`: The main component rendering the tables.
  - `data.js`: Contains the agriculture data in JSON format.
  - `screenshots/`: Screenshots for the two table.
     - `TableOne.png`: Screenshot for the yearly crop data table.
     - `TableTwo.png`: Screenshot for the crop average table.
  - `components/`: This folder contails the two table files .
     - `TableOne.js`: A component for displaying the yearly crop data.
     - `TableTwo.js`: A component for displaying the crop average.

## Usage

After starting the project, you will see two tables:

- Yearly Crop Data: Displays the crop with the maximum and minimum production for each year.

- Crop Averages between 1950-2020: Displays the average yield and average cultivation area for each crop between 1950 and 2020.

## Screenshots

  ### Table One: Yearly Crop Data

  ![Yearly Crop Data Table](src/screenshots/tableone.png)

  ### Table Two: Crop Averages between 1950-2020

  ![Crop Average Table](src/screenshots/tabletwo.png)
