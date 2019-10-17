const React = require('react')
const CompLibrary = require('../../core/CompLibrary.js')
const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

function HomeSplash(props) {
  const { siteConfig, language = '' } = props
  const { baseUrl, docsUrl } = siteConfig
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
  const langPart = `${language ? `${language}/` : ''}`
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`
  const pageUrl = (page) => baseUrl + (language ? `${language}/` : '') + page

  const SplashContainer = (props) => (
    <div className='homeContainer'>
      <div className='homeSplashFade'>
        <div className='wrapper homeWrapper'>{props.children}</div>
      </div>
    </div>
  )

  const Logo = (props) => (
    <div className='projectLogo'>
      <img src={props.img_src} alt='Project Logo' />
    </div>
  )

  const ProjectTitle = () => (
    <h2 className='projectTitle'>
      {siteConfig.title}
      <small>{siteConfig.tagline}</small>
    </h2>
  )

  const PromoSection = (props) => (
    <div className='section promoSection'>
      <div className='promoRow'>
        <div className='pluginRowBlock'>{props.children}</div>
      </div>
    </div>
  )

  const Button = (props) => (
    <div className='pluginWrapper buttonWrapper'>
      <a className='button' href={props.href} target={props.target}>
        {props.children}
      </a>
    </div>
  )

  return (
    <SplashContainer>
      <Logo img_src={`${baseUrl}img/cross.svg`} />
      <div className='inner'>
        <ProjectTitle siteConfig={siteConfig} />
        <PromoSection>
          <Button href={docUrl('downloads')}>Go to downloads</Button>
        </PromoSection>
      </div>
    </SplashContainer>
  )
}

function Index({ config: siteConfig, language = '' }) {
  const { baseUrl } = siteConfig

  const Block = (props) => (
    <Container
      padding={['bottom', 'top']}
      id={props.id}
      background={props.background}
    >
      <GridBlock
        align='center'
        contents={props.children}
        layout={props.layout}
      />
    </Container>
  )

  const FeatureCallout = () => (
    <div
      className='productShowcaseSection paddingBottom'
      style={{ textAlign: 'center' }}
    >
      {/* <h2>Desktop Software Application for AiTmed 2.0 (internal use)</h2> */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          width={30}
          height={30}
          src={`${siteConfig.baseUrl}img/checked.svg`}
          style={{ marginRight: 10 }}
        />
        <MarkdownBlock>Interactive controls</MarkdownBlock>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          width={30}
          height={30}
          src={`${siteConfig.baseUrl}img/checked.svg`}
          style={{ marginRight: 10 }}
        />
        <MarkdownBlock>
          Send requests and analyze responses to our new 2.0 API
        </MarkdownBlock>{' '}
      </div>
      <em>
        <MarkdownBlock>More coming soon...</MarkdownBlock>
      </em>
      {/* <MarkdownBlock>
        Send suggestions by clicking on a suggestion box
      </MarkdownBlock>
      <MarkdownBlock>
        Save data in various formats (JSON, XML, etc))
      </MarkdownBlock> */}
    </div>
  )

  const Features = () => (
    <Block layout='fourColumn'>
      {[
        {
          content: 'Built on Top of AiTmed Web 2.0',
          image: `${baseUrl}img/undraw_react.svg`,
          imageAlign: 'top',
          title: 'Test Utilities',
        },
        {
          content: 'Access to the File System',
          image: `${baseUrl}img/undraw_operating_system.svg`,
          imageAlign: 'top',
          title: 'File System',
        },
        {
          content:
            'Install Once <br /> Let the Application do the Updating In the Future',
          image: `${baseUrl}img/undraw_operating_system.svg`,
          imageAlign: 'top',
          title: 'Auto Update',
        },
      ]}
    </Block>
  )

  const Showcase = () => {
    if ((siteConfig.users || []).length === 0) {
      return null
    }

    const langPart = `${language ? `${language}/` : ''}`
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`
    const pageUrl = (page) => baseUrl + (language ? `${language}/` : '') + page

    return (
      <div className='productShowcaseSection paddingBottom'>
        <div className='more-users'>
          <a className='button' href={docUrl('downloads')}>
            Download It Now
          </a>
        </div>
      </div>
    )
  }

  return (
    <div>
      <HomeSplash siteConfig={siteConfig} language={language} />
      <div className='mainContainer'>
        <Features />
        <FeatureCallout />
        <Showcase />
      </div>
    </div>
  )
}

module.exports = Index
