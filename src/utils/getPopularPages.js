const { google } = require('googleapis')
const replace = require('lodash.replace')

require('dotenv').config()

const VIEW_ID = `ga:${process.env.GA_VIEW_ID}`

// fix for failing build on the cloud
const googleApiKey = replace(
  process.env.GA_SERVICE_ACCOUNT_KEY,
  new RegExp('\\\\n', 'g'),
  '\n'
)

const jwtClient = new google.auth.JWT(
  process.env.GA_SERVICE_ACCOUNT,
  null,
  googleApiKey,
  ['https://www.googleapis.com/auth/analytics.readonly'],
  null
)

module.exports = () => {
  return new Promise((resolve, reject) => {
    jwtClient.authorize((authError, _tokens) => {
      if (authError) {
        reject(authError)
      }

      const analytics = google.analytics('v3')

      analytics.data.ga.get(
        {
          auth: jwtClient,
          ids: VIEW_ID,
          metrics: 'ga:uniquePageviews',
          dimensions: 'ga:pagePath',
          'start-date': '2019-01-01',
          'end-date': 'today',
          sort: '-ga:uniquePageviews'
        },
        (getDataError, response) => {
          if (getDataError) {
            reject(getDataError)
          }

          resolve(response)
        }
      )
    })
  })
}
