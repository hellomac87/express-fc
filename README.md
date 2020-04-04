# express-fc

## http 상태코드

| 상태코드 | 설명                        |
| -------- | --------------------------- |
| 1XX      | 조건부 응답                 |
| 2XX      | 응답 성공                   |
| 3XX      | 리다이렉션                  |
| 4XX      | 요청오류 (ex 404 Not Found) |
| 5XX      | 서버오류                    |

## REST API

| Method |             | 설명             |
| ------ | ----------- | ---------------- |
| GET    | /users      | 사용자 정보 조회 |
| POST   | /users      | 사용자 정보 추가 |
| GET    | /users/(id) | 특정 사용자 조회 |
| PUT    | /users/(id) | 특정 사용자 수정 |
| DELETE | /users/(id) | 특정 사용자 삭제 |
