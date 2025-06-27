// components/TeamSection.js

import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Kevin McCaul',
    image:
      'https://cdn.prod.website-files.com/67b733e6a8c26a573806485c/67cf79e47d1b0a300ede17b9_ALLIES_PRESS-49.jpg',
    bio: `Kevin is a client’s best friend, a straight-talker, a team player, and once you’re on board, your right-hand brand champion. He’s got grown-up experience on both sides of the client/agency fence. Kevin founded Allies as he believes Ireland needs a serious reimagination of the agency experience, for both clients and creatives.`,
  },
  {
    id: 2,
    name: 'Emma Hetherington',
    image:
      'https://cdn.prod.website-files.com/67b733e6a8c26a573806485c/67cf79dbfd4467d9814d470c_ALLIES_PRESS-50.jpg',
    bio: `Big thinker. Creative dreamer. Eats, sleeps creativity. Emma is a designer with a love of brands that have big aspirations and the guts to break the rules. She’s a deep thinker and will push your brand as far as it can go.`,
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Meet your Allies
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-700 mt-3 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
