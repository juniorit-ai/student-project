
import pandas as pd
from byteboss import ByteBossAI

# Initialize ByteBoss AI Agent
byteboss = ByteBossAI()

# Import sample data
data = pd.read_csv('sample_data.csv')

# Perform basic data analysis
summary = byteboss.analyze(data)

# Generate a simple report
report = byteboss.generate_report(summary)

# Print the report
print(report)
