export interface ListItemType {
  id: number;
  title: string;
  description: string;
}

export const generateItems = (count: number): ListItemType[] => {
  const topics = [
    'TypeScript',
    'React',
    'Node.js',
    'GraphQL',
    'REST APIs',
    'Redux',
    'Testing',
    'Performance',
    'Security',
    'DevOps',
  ];

  const actions = [
    'Development',
    'Implementation',
    'Architecture',
    'Best Practices',
    'Patterns',
    'Optimization',
    'Integration',
    'Management',
    'Deployment',
    'Testing',
  ];
  return Array.from({ length: count }, (_, i) => {
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    return {
      id: i + 1,
      title: `${topic} ${action}`,
      description: `Advanced techniques and strategies for ${topic.toLowerCase()} ${action.toLowerCase()} in modern web applications.`
    };
  });
};
