import { stringByLine } from "../utils/string-by-line";

export type Nodes = Map<string, Node>;
export type Node = { label: string, destinations: string[] }

export const parseInstructions = (input: string) => {
  const [instructions, ...nodes] = stringByLine(input);
  const parsedNodes = nodes.reduce<Nodes>((map, node) => {
    const [nodeLabel, nodeDestinations] = node.replace(/\s+/g, '').split('=');
    map.set(nodeLabel, {
      label: nodeLabel,
      destinations: nodeDestinations.replace(/[()]/g, '').split(',')
    })
    return map;
  }, new Map());
  return {directions: instructions.split(''), nodes: parsedNodes}
}

export const findNode = (label: string, nodes: Nodes) => {
  return nodes.get(label)!;
}

export const calculateStepsToZZZ = (instructions: ReturnType<typeof parseInstructions>) => {
  const startingNode = findNode('AAA', instructions.nodes);
  if (!startingNode) return 0;
  let stepsTaken = 0;
  let currentNode: Node = startingNode;

  while (currentNode.label !== 'ZZZ') {
    const direction = instructions.directions[stepsTaken % instructions.directions.length];
    if (direction === 'L') currentNode = findNode(currentNode.destinations[0], instructions.nodes);
    if (direction === 'R') currentNode = findNode(currentNode.destinations[1], instructions.nodes);
    stepsTaken++;
    if (currentNode?.label === 'ZZZ') break;
  }
  return stepsTaken;
}

export const calculateStepsToAllZ = (instructions: ReturnType<typeof parseInstructions>) => {
  const startingNodes = [...instructions.nodes.values()].filter(node => node.label.endsWith('A'));
  if (startingNodes.length === 0) return 0;
  const currentNodes: Node[] = startingNodes;

  const stepsRequiredPer = currentNodes.map(node => {
    let stepsTaken = 0;
    let currentNode: Node = node;

    while (!currentNode.label.endsWith('Z')) {
      const direction = instructions.directions[stepsTaken % instructions.directions.length];
      if (direction === 'L') currentNode = findNode(currentNode.destinations[0], instructions.nodes);
      if (direction === 'R') currentNode = findNode(currentNode.destinations[1], instructions.nodes);
      stepsTaken++;
    }
    return stepsTaken;
  });

  return stepsRequiredPer.reduce((acc, steps) => lowestCommonMultiple(acc, steps));
}

const greatestCommonDivisor = (x: number, y: number): number => (!y ? x : greatestCommonDivisor(y, x % y));

const lowestCommonMultiple = (x: number, y: number): number => (x * y) / greatestCommonDivisor(x, y);

