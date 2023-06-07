import sys

[n, k] = map(int, sys.stdin.readline().rstrip().split())

coins = []

for _ in range(n):
  coins.append(int(sys.stdin.readline().rstrip()))

dp = [0 for i in range(10001)]
dp[0] = 1

for coin in coins:
  for i in range(coin, k + 1):
    dp[i] += dp[i - coin]

print(dp[k])
