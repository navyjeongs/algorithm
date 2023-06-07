import sys
import heapq

N = int(sys.stdin.readline().rstrip())

heap = []
answer = []
for _ in range(N):
  case = int(sys.stdin.readline().rstrip())
  if case == 0:
    if len(heap) == 0:
      answer.append(0)
    else:
      answer.append(heapq.heappop(heap))
  else:
    heapq.heappush(heap, case)

for i in answer:
  print(i)