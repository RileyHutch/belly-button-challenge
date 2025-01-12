# Belly Button Biodiversity Dashboard

## Project Overview
This interactive dashboard visualizes the bacterial species living in human navels, based on data from the Belly Button Biodiversity dataset. The dashboard allows users to explore the microbial species (operational taxonomic units, or OTUs) present in different test subjects' belly buttons.

## Technologies Used
- HTML/CSS for structure and styling
- JavaScript for interactive functionality
- D3.js for data handling
- Plotly.js for creating dynamic visualizations
- Bootstrap for responsive layout

## Data Structure
The dashboard uses a JSON file containing three main data components:
- `names`: Array of test subject ID numbers
- `metadata`: Demographic information for each test subject
- `samples`: Bacterial species data including:
  - `otu_ids`: Identification numbers for the bacterial species
  - `sample_values`: Quantity of each bacterial species
  - `otu_labels`: Scientific names of the bacterial species

## Visualization Details
### Bar Chart
- Displays the top 10 bacterial species (OTUs)
- Horizontal orientation for better readability
- Shows sample values and OTU IDs
- Includes hover text with bacterial species names

### Bubble Chart
- Visualizes all bacterial species found
- Size of bubbles represents the sample values
- Color of bubbles varies by OTU ID
- X-axis shows OTU IDs
- Hover text provides detailed bacterial information

## Credits
This project uses data from the Belly Button Biodiversity dataset, which catalogs the microbes colonizing human navels.
I used class work from module 14 for this assignment as well as the assistance of Claude