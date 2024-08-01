
# Demonstration of different types of AI agents

class ReactiveAgent:
    def react(self, environment):
        print('Reactive Agent reacting to the environment:', environment)

class GoalBasedAgent:
    def pursue_goal(self, goal):
        print('Goal-Based Agent pursuing goal:', goal)

class UtilityBasedAgent:
    def choose_action(self, actions):
        print('Utility-Based Agent choosing action from:', actions)

class LearningAgent:
    def learn(self, experience):
        print('Learning Agent learning from experience:', experience)

# Example usage
reactive_agent = ReactiveAgent()
reactive_agent.react('Clean room')

goal_based_agent = GoalBasedAgent()
goal_based_agent.pursue_goal('Solve the puzzle')

utility_based_agent = UtilityBasedAgent()
utility_based_agent.choose_action(['Clean', 'Relax', 'Study'])

learning_agent = LearningAgent()
learning_agent.learn('Failed attempt at solving the puzzle')
