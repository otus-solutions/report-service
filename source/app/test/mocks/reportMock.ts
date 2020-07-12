export const reportMock: {} = {"_id": "5be30a2616da480067523dfd",
  "objectType": "ParticipantReport",
  "template": "<otus-script>{{data.participant = ds.participant[0]}}</otus-script><div>{{data.participant.name}}</div>",
  "label": "HbA1c - Hemoglobina Glicada (Lab. Central)",
  "sender": "diogo.rosas.ferreira@gmail.com",
  "sendingDate": "2018-11-07T15:52:06.040Z",
  "fieldCenter": [
  "SP",
  "RS",
  "RJ",
  "MG",
  "ES",
  "BA"
],
  "dataSources": [
  {
    "key": "participant",
    "dataSource": "Participant",
    "label": "Informações do participante",
    "result": [
      {
        "recruitmentNumber": 5555563,
        "name": "Fulano Detal",
        "sex": "M",
        "birthdate": {
          "objectType": "ImmutableDate",
          "value": "1949-04-22 00:00:00.000"
        },
        "fieldCenter": {
          "name": null,
          "code": 5,
          "acronym": "RS",
          "country": null,
          "state": null,
          "address": null,
          "complement": null,
          "zip": null,
          "phone": null,
          "backgroundColor": null,
          "borderColor": null,
          "locationPoint": null
        }
      }
    ],
    "optional": false
  },
  {
    "filters": {
      "acronym": "CSJ",
      "category": "C0",
      "statusHistory": {
        "name": "FINALIZED",
        "position": -1
      }
    },
    "key": "atividade",
    "dataSource": "Activity",
    "label": "Formulario CSJ com status igual a finalizado",
    "result": [
      {
        "statusHistory": [
          {
            "objectType": "ActivityStatus",
            "name": "CREATED",
            "date": "2017-09-26T15:34:23.205Z",
            "user": {
              "name": "Andreza",
              "surname": "Moreira Oliveira dos Santos",
              "phone": "21982447739",
              "email": "andrezasantosjc@gmail.com"
            }
          },
          {
            "objectType": "ActivityStatus",
            "name": "OPENED",
            "date": "2017-09-26T15:39:29.808Z",
            "user": {
              "name": "Andreza",
              "surname": "Moreira Oliveira dos Santos",
              "phone": "21982447739",
              "email": "andrezasantosjc@gmail.com"
            }
          },
          {
            "objectType": "ActivityStatus",
            "name": "INITIALIZED_ONLINE",
            "date": "2017-09-26T15:39:32.582Z",
            "user": {
              "name": "Andreza",
              "surname": "Moreira Oliveira dos Santos",
              "phone": "21982447739",
              "email": "andrezasantosjc@gmail.com"
            }
          },
          {
            "objectType": "ActivityStatus",
            "name": "FINALIZED",
            "date": "2017-09-26T15:41:06.522Z",
            "user": {
              "name": "Andreza",
              "surname": "Moreira Oliveira dos Santos",
              "phone": "21982447739",
              "email": "andrezasantosjc@gmail.com"
            }
          }
        ],
        "mode": "ONLINE"
      }
    ],
    "optional": false
  },
  {
    "filters": {
      "examName": "HEMOGLOBINA GLICADA - SANGUE",
      "fieldCenter": "SP"
    },
    "key": "exame",
    "dataSource": "Exam",
    "label": "Resultados HbA1C",
    "result": [
      {
        "_id": "5b0475ea40181911a4d2eda9",
        "examSendingLotId": "5ebd9da7b9bfaf5fd3372134",
        "objectType": "Exam",
        "name": "HEMOGLOBINA GLICADA - SANGUE",
        "examResults": [
          {
            "examSendingLotId": "5b0475ea40181911a4d2eda8",
            "examId": "5b0475ea40181911a4d2eda9",
            "_id": "5b0475eb40181911a4d2f07c",
            "objectType": "ExamResults",
            "code": null,
            "examName": "HEMOGLOBINA GLICADA - SANGUE",
            "resultName": "HEMOGLOBINA GLICADA-HBA1C...............:",
            "value": "6.0",
            "isValid": true,
            "releaseDate": "2018-03-29T11:14:00.000Z",
            "observations": [],
            "fieldCenter": null,
            "recruitmentNumber": 5555563,
            "sex": "F",
            "birthdate": {
              "objectType": "ImmutableDate",
              "value": "1930-06-01 00:00:00.000"
            }
          }
        ],
        "observations": []
      }
    ],
    "optional": false
  }
],
  "isInApp": true
}