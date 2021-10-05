import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allRemoteCsv {
          nodes {
            ar
            bil
            drivmedel
            id
            kaross
            omrade
            ort
            prisKrMilIngaTillagg
            bildBak
            bildFram
            tillbehor
            tillgangligForNyaAvtal
            vaxellada
            klimatindexEndastForBilarHogst10ArGamla
          }
        }
      }
    `}
    render={(data) => (
      <>
        { 
          data.allRemoteCsv.nodes.map( (car) => (
              <div>
                {car.bil}
                <img src={car.bildFram} width={480} />
              </div>
            )
          )
        }
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
