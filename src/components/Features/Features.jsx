import React from "react";
import RellaxWrapper from "react-rellax-wrapper";
import './features.css'

const Features = ({rocketFeatures}) => {
  const height = {meters: '', feet: ''}
  const diameter = {meters: '', feet: ''}
  const mass = {kg: '', lb: ''}
  const payload_weights = {kg: '', lb: ''}

  if (rocketFeatures.height) {
    height.meters = rocketFeatures.height.meters
    height.feet = rocketFeatures.height.feet
    diameter.meters = rocketFeatures.diameter.meters
    diameter.feet = rocketFeatures.diameter.feet
    mass.kg = rocketFeatures.mass.kg
    mass.lb = rocketFeatures.mass.lb
  }
  if (rocketFeatures.payload_weights) {
    rocketFeatures.payload_weights.forEach(item => {
      payload_weights.kg = item.kg
      payload_weights.lb = item.lb
    })
  }

  const image = {
    'Falcon 1': 'falcon-1',
    'Falcon 9': 'falcon-9',
    'Falcon Heavy': 'falcon-heavy',
    'Starship': 'starship'
  }

  return (
    <section className="features">
      <h2 className="features-title">
        {rocketFeatures ? rocketFeatures.name : 'Error'}<br/>Overview
      </h2>
      <div className="overview">

        <table className="table">
          <caption className="table-title">
            Size
          </caption>
          <thead>
          <tr>
            <td className="table-column">HEIGHT</td>
            {}
            <td className="table-column">{height.meters} m / {height.feet} ft</td>
          </tr>
          <tr>
            <td className="table-column">DIAMETER</td>
            <td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
          </tr>
          <tr>
            <td className="table-column">MASS</td>
            <td className="table-column">{mass.kg} kg / {mass.lb} lb</td>
          </tr>
          <tr>
            <td className="table-column">PAYLOAD TO LEO</td>
            <td className="table-column">{payload_weights.kg} kg / {payload_weights.lb} lb</td>
          </tr>
          </thead>
        </table>
        <RellaxWrapper speed={14}>
          <img
            src={`img/${image.hasOwnProperty(rocketFeatures.name) ?
            image[rocketFeatures.name] :
            ''}.png`}
            alt="rocket"
            className="rocket"
            data-rellax-speed="14"
          />
        </RellaxWrapper>
        <article>
          <h3 className="features-subtitle">DESCRIPTION</h3>
          <p className="features-text">
            {rocketFeatures ? rocketFeatures.description : 'Error'}
          </p>
        </article>
      </div>
    </section>
  )
}

export default Features