// Build the metadata panel      DO YOU PEOPLE KNOW HOW LONG IT TOOK ME TO FIGURE OUT THAT I HAD TO GO TO A FUNCTION WITH NO PARAMETERS FOR A CONSOLE.LOG TO SEE THE DATA?!?! OHMYGOSH
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    
    // get the metadata field
    const metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const desiredSample = metadata.filter(obj => obj.id == sample)[0]

    // Use d3 to select the panel with id of `#sample-metadata`
    const panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("")

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(desiredSample).forEach(([key, value]) => {
      panel.append("p").text(`${key}: ${value}`);  });
    });
  };


// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    const samples = data.samples;

    // Filter the samples for the object with the desired sample number
    const desiredSample = samples.filter(obj => obj.id == sample)[0]

    // Get the otu_ids, otu_labels, and sample_values
    const otu_ids = desiredSample.otu_ids;
    const otu_labels = desiredSample.otu_labels;
    const sample_values = desiredSample.sample_values;

    // Build a Bubble Chart
    const bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Portland'
      }
    }];

    const bubbleLayout = {
      title: 'Bubble Bacteria Bidversity in Belly Buttons (BBBB)',
      xaxis: {title: 'OTU ID'}
    };

    // Render the Bubble Chart
    Plotly.newPlot('bubble', bubbleData, bubbleLayout); 

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    const yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    const barData = [{
      x: sample_values.slice(0, 10).reverse(),
      y: yticks,
      type: 'bar',
      orientation: 'h'
    }]
    const barLayout = { title: 'Top 10 Bacteria Found' };

    // Render the Bar Chart
    Plotly.newPlot('bar', barData, barLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
console.log(data)
    // Get the names field
    const names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select("#selDataset")

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach(name => {
      dropdown. append('option')
      .text(name)
      .property('value', name);
    });

    // Get the first sample from the list
    const firstSample = names[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();
