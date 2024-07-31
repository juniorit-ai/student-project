
class ReactiveAgent:
    def react(self, environment):
        if 'threat' in environment:
            return 'evade'
        elif 'opportunity' in environment:
            return 'exploit'
        else:
            return 'wait'

class CognitiveAgent:
    def perceive(self, environment):
        if 'threat' in environment:
            return 'analyze threat'
        elif 'opportunity' in environment:
            return 'evaluate opportunity'
        else:
            return 'explore'

# Example usage
reactive = ReactiveAgent()
cognitive = CognitiveAgent()

environment = ['threat', 'opportunity']
print('Reactive Agent:', reactive.react(environment))
print('Cognitive Agent:', cognitive.perceive(environment))
