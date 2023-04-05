import pandas as pd
import numpy as np
import nltk
nltk.download('vader_lexicon')
from nltk.sentiment.vader import SentimentIntensityAnalyzer

sid = SentimentIntensityAnalyzer()

df = pd.read_csv('TrumpTweets.csv')
dropList = ['id', 'threadId', 'urls', 'quoted']
df=df.drop(dropList, axis=1)
df['scores'] = df['tweet'].apply(lambda tweet: sid.polarity_scores(tweet))
df['compound']  = df['scores'].apply(lambda score_dict: score_dict['compound'])
df['comp_score'] = df['compound'].apply(lambda c: 'pos' if c >=0 else 'neg')
index = pd.Index(df['comp_score'])
index.value_counts()

compression_opts = dict(method='zip', archive_name='tweets.csv')  
df.to_csv('tweets.zip', index=False, compression=compression_opts)  