# Seasonal Color Variations

From the leaves, to the light filtering through your windows, colors change with the seasons. So why don't the colors on your website? Seasonal Color Variations is a simple package that enables you create seasonal color changes in your react application.

Choose color variations for each season, and Seasonal Color Variations creates a year long gradient, with each day being a unique color step. Based on the date input, a color is interpolated from the gradient and output as hex code.

## Installation

## Use

Below is an example of how to use this package. Import the function. Declare your four color variations, and pass a month and day value. 

```
import SeasonalColorVariation from 'SeasonalColorVariation'

export default function Home() {
 
  const [startDate, setStartDate] = useState(new Date());
  const monthBase = startDate.getMonth()
  const dayBase = startDate.getDate()

  var green = SeasonalColorVariation('#698248', '#1B3534', '#955C3F', '#782B33', monthBase, dayBase);


  return (
    <div>
      <main>
        <p> Today's Color = {green.col}</p>
        <div style={{height: "100px",width: "100px", background: green.col}}/>
      </main>
    </div>
  )
}

```