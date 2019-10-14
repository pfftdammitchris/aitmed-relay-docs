const React = require('react')

function Footer({ config, language }) {
  function getDocUrl(doc, lang) {
    const baseUrl = config.baseUrl
    const docsUrl = config.docsUrl
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    return `${baseUrl}${docsPart}${langPart}${doc}`
  }

  function getPageUrl(doc, language) {
    const baseUrl = config.baseUrl
    return baseUrl + (language ? `${language}/` : '') + doc
  }

  return (
    <footer className='nav-footer' id='footer'>
      <a
        href='https://aitmed.com/'
        target='_blank'
        rel='noreferrer noopener'
        className='fbOpenSource'
      >
        <img src={config.baseUrl + config.footerIcon} />
      </a>
      <section className='copyright'>{config.copyright}</section>
    </footer>
  )
}

module.exports = Footer
