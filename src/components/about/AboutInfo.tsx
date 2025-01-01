import { motion } from 'framer-motion';
import InfoBox from './InfoBox';

export default function AboutInfo() {
  return (
    <div className="space-y-8 mt-16">
      <InfoBox title="What is NAVADA?">
        <p className="text-gray-300 mb-6">
          NAVADA is an innovative open-source initiative designed to harness the power of 
          <span className="text-purple-400"> AI (Artificial Intelligence)</span> and 
          <span className="text-pink-400"> Web3 technologies</span> to empower individuals and businesses.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>AI-powered predictive analytics for smarter decision-making</li>
          <li>Web3 platforms for decentralized collaboration</li>
          <li>Programs for skill development and community engagement</li>
        </ul>
      </InfoBox>

      <InfoBox title="Why NAVADA?">
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Addressing Unemployment</h4>
            <p className="text-gray-400">Equipping communities with in-demand skills and connecting them to opportunities.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Empowering Businesses</h4>
            <p className="text-gray-400">Providing tools and strategies to help businesses thrive in the digital landscape.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Promoting Transparency</h4>
            <p className="text-gray-400">Ensuring all operations and progress are transparent through open-source approach.</p>
          </div>
        </div>
      </InfoBox>

      <InfoBox title="How Does NAVADA Work?">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Skill Development</h4>
              <p className="text-gray-400">Training in AI, Web3, and blockchain technologies.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Technology Platforms</h4>
              <p className="text-gray-400">Developing AI and Web3 tools for business optimization.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Community Engagement</h4>
              <p className="text-gray-400">Creating forums for idea exchange and collaboration.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Open Source</h4>
              <p className="text-gray-400">Publishing progress and inviting community contributions.</p>
            </div>
          </div>
        </div>
      </InfoBox>
    </div>
  );
}