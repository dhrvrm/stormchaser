import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, immersing ourselves in their daily operations to grasp the
          essence of their business.
        </p>
        <p>
          Our team of expert analysts conducts thorough research and in-depth
          interviews with key stakeholders. Our account managers focus on
          comprehensive data analysis, while our senior consultants perform
          detailed industry and market assessments to gain valuable insights
          into the{' '}
          <strong className="font-semibold text-neutral-950">business</strong>{' '}
          landscape.
        </p>
        <p>
          Once the full discovery process is complete, we deliver a
          comprehensive{' '}
          <strong className="font-semibold text-neutral-950">plan</strong> and,
          importantly, a detailed budget proposal.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Comprehensive business analysis</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the discovery phase, we develop a comprehensive roadmap for
          each product and begin working towards delivery. The roadmap is a
          detailed plan designed to optimize project efficiency and ensure
          timely completion.
        </p>
        <p>
          Each client is assigned a dedicated account manager to maintain open
          communication and provide regular updates on project progress. They
          act as a liaison between the client and our development team, who are
          diligently working to create custom solutions tailored to the
          client&apos;s needs.
        </p>
        <p>
          Our account managers are trained to maintain prompt and professional
          communication, ensuring clients are well-informed throughout the
          development process. This approach fosters transparency, encourages
          collaborative refinement, and reinforces our commitment to delivering
          high-quality results.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Vaayu Digital&apos;s team were so regular with their progress updates we
        almost began to think they were automated!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we approach the final stages of the Build phase, we reassess
          project{' '}
          <strong className="font-semibold text-neutral-950">
            requirements
          </strong>{' '}
          to ensure all client needs are met. This allows us to refine the scope
          and ensure the highest quality deliverables.
        </p>
        <p>
          Our team maintains steady{' '}
          <strong className="font-semibold text-neutral-950">progress</strong>{' '}
          throughout the project, with a final push to perfect all elements
          before launch. The development time is strategically allocated to
          maximize efficiency and innovation in each client&apos;s solution.
        </p>
        <p>
          We prioritize launching with all core features{' '}
          <strong className="font-semibold text-neutral-950">
            fully functional
          </strong>{' '}
          , while planning for continuous improvements post-launch. Our
          comprehensive{' '}
          <strong className="font-semibold text-neutral-950">
            maintenance
          </strong>{' '}
          plan ensures ongoing support and enhancements to keep your digital
          presence cutting-edge.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our rigorous quality assurance process ensures comprehensive test
          coverage for reliable performance.
        </ListItem>
        <ListItem title="Infrastructure">
          We utilize robust, scalable hosting solutions to guarantee optimal
          site reliability and speed.
        </ListItem>
        <ListItem title="Support">
          Our commitment to your success includes ongoing technical support and
          strategic guidance to maximize your digital investment.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and technologies
          while leveraging our proven expertise. Our core values guide every
          decision and action:
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            We begin each partnership by thoroughly integrating your brand
            identity into our tailored solutions, ensuring a perfect fit for
            your unique vision.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on consistently meeting deadlines, thanks to our
            streamlined processes and experienced team.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs, and our greatest strength is
            crafting flexible solutions that precisely match your requirements.
          </GridListItem>
          <GridListItem title="Honest">
            We maintain transparency throughout our processes, ensuring clear
            communication and mutual understanding at every project stage.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that extend
            beyond product delivery, providing ongoing support and strategic
            guidance.
          </GridListItem>
          <GridListItem title="Innovative">
            In the ever-evolving technological landscape, we constantly explore
            new methodologies and tools to enhance our solutions and drive your
            business forward.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We excel in delivering high-quality web solutions with unmatched
          speed. Our seasoned team leverages cutting-edge technologies and
          proven methodologies to create powerful, scalable websites that drive
          business growth. From concept to deployment, we ensure each project
          meets the highest standards of performance and user experience.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
