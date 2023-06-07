import sys
import heapq

INF = int(1e9)  # 무한

V, E = map(int, sys.stdin.readline().split())
K = int(sys.stdin.readline().rstrip())

graph = [[] for _ in range(V + 1)]  # 그래프 정보, 정점은 1번 부터 시작

dist = [INF] * (V + 1)  # 최단 거리 테이블, 정점은 1번 부터 시작이므로

for _ in range(E):
  start, end, cost = map(int, sys.stdin.readline().rstrip().split())
  graph[start].append((end, cost))

heap = []
heapq.heappush(heap, (0, K))  # 시작 정점 우선순위 큐에 삽입, (거리, 정점) 순으로 삽입
dist[K] = 0  # 시작 정점까지의 최단거리 테이블 채움

while heap:  # 힙에 요소가 있다면
  cost, now = heapq.heappop(heap)  # (비용, 현재 정점)

  if dist[now] < cost:  # 현재 최단거리 테이블의 작성된 비용보다 큰 비용이라면
    continue
  for info in graph[now]:  # info[0] : 도착 정점, info[1] : now에서 info[0] 정점까지 비용
    if cost + info[1] < dist[info[0]]:
      dist[info[0]] = cost + info[1]
      heapq.heappush(heap, ((cost + info[1]), info[0]))

for i in range(1, V+1):
  if dist[i] == INF:
    print("INF")
  else:
    print(dist[i])
