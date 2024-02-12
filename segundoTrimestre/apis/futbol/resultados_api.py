# -*- coding: utf-8 -*-
import jsonpickle
from lxml import html
import requests
from datetime import datetime
import locale
import json

# Supongamos que 'mis_competiciones' contiene toda la información que deseas guardar en formato JSON


URL = 'https://www.resultados-futbol.com{}'

COMPETICIONES = {#'En directo': {'En directo':[{'grupo':'','link':'/livescore'}]},
                 'España': {'Primera división':[{'grupo':'', 'link':'/primera'}],
                            'Segunda división':[{'grupo':'', 'link':'/segunda'}],
                            'Copa del Rey': [{'grupo':'', 'link':'/copa_del_rey'}],
                            'Supercopa de España': [{'grupo':'', 'link':'/supercopa'}]
                            },
                 'Inglaterra': {'Premier': [{'grupo':'', 'link':'/premier'}],
                                },
                 'Italia': {'Serie A': [{'grupo':'', 'link':'/serie_a'}],
                            },

                 'Alemania' : {'Bundesliga': [{'grupo':'', 'link':'/bundesliga'}],
                               },

                 'Francia' : {'Ligue 1': [{'grupo':'', 'link':'/ligue_1'}],
                              },

                 'Liga de Campeones':{'Grupos': [{'grupo':'A', 'link':'/champions/grupo1'},
                                                 {'grupo':'B', 'link':'/champions/grupo2'},
                                                 {'grupo':'C', 'link':'/champions/grupo3'},
                                                 {'grupo':'D', 'link':'/champions/grupo4'},
                                                 {'grupo':'E', 'link':'/champions/grupo5'},
                                                 {'grupo':'F', 'link':'/champions/grupo6'},
                                                 {'grupo':'G', 'link':'/champions/grupo7'},
                                                 {'grupo':'H', 'link':'/champions/grupo8'}
                                                 ],
                                      'Eliminatoria':[{'grupo':'', 'link':'/champions/eliminatoria'}]
                                      },

                 'Liga Europa de la UEFA':{'Grupos': [{'grupo':'A', 'link':'/uefa/grupo1'},
                                                      {'grupo':'B', 'link':'/uefa/grupo2'},
                                                      {'grupo':'C', 'link':'/uefa/grupo3'},
                                                      {'grupo':'D', 'link':'/uefa/grupo4'},
                                                      {'grupo':'E', 'link':'/uefa/grupo5'},
                                                      {'grupo':'F', 'link':'/uefa/grupo6'},
                                                      {'grupo':'G', 'link':'/uefa/grupo7'},
                                                      {'grupo':'H', 'link':'/uefa/grupo8'}
                                                      ],
                                           'Eliminatoria':[{'grupo':'', 'link':'/uefa/eliminatoria'}]
                                           },
                 
                 'Liga Conferencia de la UEFA':{'Grupos': [{'grupo':'A', 'link':'/conference-league/grupo1'},
                                                           {'grupo':'B', 'link':'/conference-league/grupo2'},
                                                           {'grupo':'C', 'link':'/conference-league/grupo3'},
                                                           {'grupo':'D', 'link':'/conference-league/grupo4'},
                                                           {'grupo':'E', 'link':'/conference-league/grupo5'},
                                                           {'grupo':'F', 'link':'/conference-league/grupo6'},
                                                           {'grupo':'G', 'link':'/conference-league/grupo7'},
                                                           {'grupo':'H', 'link':'/conference-league/grupo8'}
                                                           ],
                                                'Eliminatoria':[{'grupo':'', 'link':'/conference-league/eliminatoria'}]
                                                },

                 'Eurocopa': {'Grupos':[{'grupo':'A', 'link':'/eurocopa/grupo1'},
                                        {'grupo':'B', 'link':'/eurocopa/grupo2'},
                                        {'grupo':'C', 'link':'/eurocopa/grupo3'},
                                        {'grupo':'D', 'link':'/eurocopa/grupo4'},
                                        {'grupo':'E', 'link':'/eurocopa/grupo5'},
                                        {'grupo':'F', 'link':'/eurocopa/grupo6'},
                                        ],
                              'Eliminatoria':[{'grupo':'', 'link':'/eurocopa/eliminatoria'}],
                              'Clasificación Eurocopa':[{'grupo':'A', 'link':'/clasificacion_eurocopa/grupo1'},
                                                        {'grupo':'B', 'link':'/clasificacion_eurocopa/grupo2'},
                                                        {'grupo':'C', 'link':'/clasificacion_eurocopa/grupo3'},
                                                        {'grupo':'D', 'link':'/clasificacion_eurocopa/grupo4'},
                                                        {'grupo':'E', 'link':'/clasificacion_eurocopa/grupo5'},
                                                        {'grupo':'F', 'link':'/clasificacion_eurocopa/grupo6'},
                                                        {'grupo':'G', 'link':'/clasificacion_eurocopa/grupo7'},
                                                        {'grupo':'H', 'link':'/clasificacion_eurocopa/grupo8'},
                                                        {'grupo':'I', 'link':'/clasificacion_eurocopa/grupo9'},
                                                        {'grupo':'J', 'link':'/clasificacion_eurocopa/grupo10'},
                                                        ],
                              },
                 
                 'Liga de las Naciones de la UEFA': {'Grupos': [{'grupo':'A', 'link':'/liga_de_las_naciones_de_la_uefa/grupo1'},
                                                                {'grupo':'B', 'link':'/liga_de_las_naciones_de_la_uefa/grupo2'},
                                                                {'grupo':'C', 'link':'/liga_de_las_naciones_de_la_uefa/grupo3'},
                                                                {'grupo':'D', 'link':'/liga_de_las_naciones_de_la_uefa/grupo4'},
                                                               ],
                                                     'Eliminatoria':[{'grupo':'', 'link':'/liga_de_las_naciones_de_la_uefa/eliminatoria'}],
                                                     'Playoffs descenso': [{'grupo':'', 'link':'/liga_de_las_naciones_de_la_uefa/grupo5'}]
                                                     },

                 'Europeo Sub 21': {'Grupos': [{'grupo':'A', 'link':'/europeo_sub_21/grupo1'},
                                               {'grupo':'B', 'link':'/europeo_sub_21/grupo2'},
                                               {'grupo':'C', 'link':'/europeo_sub_21/grupo3'},
                                               {'grupo':'D', 'link':'/europeo_sub_21/grupo4'},
                                               ],
                                    'Eliminatoria':[{'grupo':'', 'link':'/europeo_sub_21/eliminatoria'}]
                                    },
                 
                 'Mundial':{'Grupos':[{'grupo':'A', 'link':'/mundial/grupo1'},
                                      {'grupo':'B', 'link':'/mundial/grupo2'},
                                      {'grupo':'C', 'link':'/mundial/grupo3'},
                                      {'grupo':'D', 'link':'/mundial/grupo4'},
                                      {'grupo':'E', 'link':'/mundial/grupo5'},
                                      {'grupo':'F', 'link':'/mundial/grupo6'},
                                      {'grupo':'G', 'link':'/mundial/grupo7'},
                                      {'grupo':'H', 'link':'/mundial/grupo8'}
                                      ],
                            'Eliminatoria':[{'grupo':'', 'link':'/mundial/eliminatoria'}]
                            },
                 
                 'Partidos amistosos':{'Partidos amistosos':[{'grupo':'', 'link':'/partidos_amistosos'}]
                                       },
                 }

s = requests.Session()

class Grupo_link:
    def __init__(self, tipo_liga, name_liga, grupo, link):
        self.tipo_liga = tipo_liga
        self.name_liga = name_liga
        self.grupo = grupo
        self.link = link

    def __dict__(self):
        return {
            'tipo_liga': self.tipo_liga,
            'name_liga': self.name_liga,
            'grupo': self.grupo,
            'link': self.link
        }

    def obtener_resultados_url(self):
        return cargar_resultados_url(self.grupo, self.link)

    def obtener_mas_resultados_url(self,mas_grupo):
        return cargar_resultados_url(self.grupo, mas_grupo['link'])

    def obtener_ranking_url(self):
        url = s.get(URL.format(self.link))
        tree = html.fromstring(url.content)
        if tree.xpath("//table/thead/tr/td[1]/span"):
            mi_texto = tree.xpath("//table/thead/tr/td[1]/span/text()")[0]
            grupo = mi_texto[mi_texto.find(' ') + 1:255]
        else:
            grupo = self.grupo
        
        ranking = []

        rows_xpath = tree.xpath("//table[@id='tabla2']/tbody")
        
        if len(rows_xpath)>0:
            rows_xpath = rows_xpath[0]

        for row in rows_xpath:
            
            if row.xpath("./@class")[0]=='tr-head':
                mi_texto_tabla = row.xpath("./td[1]/span/text()")[0]
                grupo = mi_texto_tabla[mi_texto_tabla.find(' ') + 1:255]
            else:
                mi_ranking = Ranking(self.tipo_liga, self.name_liga, grupo,
                                     int(row.xpath("./th/text()")[0]), row.xpath("./th/@class")[0],
                                     row.xpath("./td/a/text()")[0], row.xpath("./td[@class='pj']/text()")[0],
                                     row.xpath("./td[@class='f']/text()")[0], row.xpath("./td[@class='c']/text()")[0],
                                     row.xpath("./td[@class='pts']/text()")[0], row.xpath("./td/a/@href")[0])

                ranking.append(mi_ranking.crear_ranking())
                
        return ranking

    def obtener_playoffs_url(self):
        url = s.get(URL.format(self.link))
        grupo = self.grupo
        tree = html.fromstring(url.content)
        playoffs = []
        rows_xpath = tree.xpath("//tr[@class='playoff_total']")

        for row in rows_xpath:
            mi_playoffs = Playoffs(row.xpath("./td[1]/div/span/text()")[0], row.xpath("./td[@class='equipo1 ']/a/text()"),
                                   row.xpath("./td[@class='equipo1 win']/a/text()"), row.xpath("./td[@class='equipo2 ']/a/text()"),
                                   row.xpath("./td[@class='equipo2 win']/a/text()"), row.xpath("./td[@class='rstd']/span/text()")[0])

            playoffs.append(mi_playoffs.crear_playoffs())

        return playoffs

    def obtener_todo_url(self):
        url = s.get(URL.format(self.link))
        tree = html.fromstring(url.content)
        num_jornada = ''
        jornada_ant = ''
        jornada_post = ''

        if len(tree.xpath("//div[@id='col-resultados']//div[@class='j_cur']/a/text()"))>0:
            num_jornada=tree.xpath("//div[@id='col-resultados']//div[@class='j_cur']/a/text()")[0]            
            
        if len(tree.xpath("//div[@id='col-resultados']//div[@class='j_ant']/a"))>0:
            jornada_ant = tree.xpath("//div[@id='col-resultados']//div[@class='j_ant']/a/@href")[0]
            

        if len(tree.xpath("//div[@id='col-resultados']//div[@class='j_sig']/a"))>0:
            jornada_post = tree.xpath("//div[@id='col-resultados']//div[@class='j_sig']/a/@href")[0]

        if tree.xpath("//table/thead/tr/td[1]/span"):
            mi_texto = tree.xpath("//table/thead/tr/td[1]/span/text()")[0]
            grupo_rank = mi_texto[mi_texto.find(' ') + 1:255]
        else:
            grupo_rank = self.grupo

        grupo = self.grupo
            
        resultados = []
        ranking = []
        playoffs = []
        rows_resultados_xpath = (tree.xpath("//tr[@class='vevent ']"),tree.xpath("//tr[@class='vevent impar']"))
        rows_ranking_xpath = tree.xpath("//table[@id='tabla2']/tbody")
        rows_playoffs_xpath = tree.xpath("//tr[@class='playoff_total']")

        if len(rows_ranking_xpath)>0:
            rows_ranking_xpath = rows_ranking_xpath[0]

        for i in range(2):
            for row in rows_resultados_xpath[i]:
                mi_resultado = Resultado(grupo, row.xpath("./td[@class='equipo1']/a/text()")[0], row.xpath("./td[@class='equipo2']/a/text()")[0],
                                         row.xpath("./td[@class='rstd']/a/span/text()"),row.xpath("./td[@class='fecha']/span/text()")[0],
                                         row.xpath("./td[@class='fecha']/@data-date")[0],
                                         row.xpath("./td[@class='rstd']/a/@href")[0])
                resultados.append(mi_resultado.crear_resultado())
                
        for row in rows_ranking_xpath:
            
            if row.xpath("./@class")[0]=='tr-head':
                mi_texto_tabla = row.xpath("./td[1]/span/text()")[0]
                grupo_rank = mi_texto_tabla[mi_texto_tabla.find(' ') + 1:255]
            else:
                mi_ranking = Ranking(self.tipo_liga, self.name_liga, grupo_rank,
                                     int(row.xpath("./th/text()")[0]), row.xpath("./th/@class")[0],
                                     row.xpath("./td/a/text()")[0], row.xpath("./td[@class='pj']/text()")[0],
                                     row.xpath("./td[@class='f']/text()")[0], row.xpath("./td[@class='c']/text()")[0],
                                     row.xpath("./td[@class='pts']/text()")[0], row.xpath("./td/a/@href")[0])

                ranking.append(mi_ranking.crear_ranking())
                    
        for row in rows_playoffs_xpath:
            mi_playoffs = Playoffs(row.xpath("./td[1]/div/span/text()")[0], row.xpath("./td[@class='equipo1 ']/a/text()"),
                                   row.xpath("./td[@class='equipo1 win']/a/text()"), row.xpath("./td[@class='equipo2 ']/a/text()"),
                                   row.xpath("./td[@class='equipo2 win']/a/text()"), row.xpath("./td[@class='rstd']/span/text()")[0])

            playoffs.append(mi_playoffs.crear_playoffs())
                        

        return {'num_jornada':num_jornada, 'jornada_ant':jornada_ant, 'jornada_post':jornada_post,
                'resultados':resultados,'ranking':ranking,'playoffs':playoffs}

class Competicion:
    
    def __init__(self, tipo, name, grupo_link):
        self.tipo=tipo
        self.name=name
        self.grupo_link=grupo_link

    

    def obtener_resultados(self):
        resultados = []
        playoffs = []
        num_match = []
        jorn_ant = []
        jorn_post = []
        error = False
        try:
            for item in self.grupo_link:
                mis_resultados = item.obtener_resultados_url()
                if mis_resultados['num_jornada'] not in num_match:
                    num_match.append(mis_resultados['num_jornada'])
                if mis_resultados['jornada_ant'] not in jorn_ant and len(mis_resultados['jornada_ant'])>0:
                    jorn_ant.append({'grupo':item.grupo, 'link':mis_resultados['jornada_ant']})
                if mis_resultados['jornada_post'] not in jorn_post and len(mis_resultados['jornada_post'])>0:
                    jorn_post.append({'grupo':item.grupo, 'link':mis_resultados['jornada_post']})

                resultados = resultados + mis_resultados['resultados']
                playoffs = playoffs + mis_resultados['playoffs']
                
            num_match_texto = jornada_texto(sorted(num_match,reverse=False))

        except:
            error = True
            num_match_texto = ''

        return {'error': error, 'num_match':num_match_texto,'jornada_ant':jorn_ant, 'jornada_post':jorn_post,
                'resultados':sorted(resultados, key=lambda k: (k['fecha'],k['grupo'],k['home'])),
                'playoffs': sorted(playoffs, key = lambda k: (k['home']))}

    def obtener_mas_resultados(self,lista_grupo,lista_link):
        resultados = []
        playoffs = []
        num_match = []
        jorn_ant = []
        jorn_post = []
        error = False
        try:
            for item in range(len(lista_link)):
                mis_resultados = cargar_resultados_url(lista_grupo[item], lista_link[item])
                
                if mis_resultados['num_jornada'] not in num_match:
                    num_match.append(mis_resultados['num_jornada'])
                if mis_resultados['jornada_ant'] not in jorn_ant and len(mis_resultados['jornada_ant'])>0:
                    jorn_ant.append({'grupo':lista_grupo[item], 'link':mis_resultados['jornada_ant']})
                if mis_resultados['jornada_post'] not in jorn_post and len(mis_resultados['jornada_post'])>0:
                    jorn_post.append({'grupo':lista_grupo[item], 'link':mis_resultados['jornada_post']})

                resultados = resultados + mis_resultados['resultados']

                playoffs = playoffs + mis_resultados['playoffs']
                
            num_match_texto = jornada_texto(sorted(num_match,reverse=False))

        except:
            error = True
            num_match_texto = ''

        return {'error': error, 'num_match':num_match_texto,'jornada_ant':jorn_ant, 'jornada_post':jorn_post,
                'resultados':sorted(resultados, key=lambda k: (k['fecha'],k['grupo'],k['home'])),
                'playoffs': sorted(playoffs, key = lambda k: (k['home']))}

    def obtener_ranking(self):
        ranking = []
        error = False
        try:
            for item in self.grupo_link:
                mi_ranking = item.obtener_ranking_url()
                ranking = ranking + mi_ranking

        except:
            error = True

        return {'error':error, 'ranking':sorted(ranking, key=lambda k: (k['grupo'],k['rank']))}

    def obtener_playoffs(self):
        playoffs = []
        error = False
        try:
            for item in self.grupo_link:
                mi_playoffs = item.obtener_playoffs_url()
                playoffs = playoffs + mi_playoffs
                
        except:
            error = True

        return {'error':error, 'playoffs': sorted(playoffs, key = lambda k: (k['home']))}

    def obtener_todo(self):        
        error = False
        num_match = []
        jorn_ant = []
        jorn_post = []
        resultados = []
        ranking = []
        playoffs = []
        try:
            for item in self.grupo_link:
                mis_datos = item.obtener_todo_url()

                if mis_datos['num_jornada'] not in num_match:
                    num_match.append(mis_datos['num_jornada'])

                if mis_datos['jornada_ant'] not in jorn_ant and len(mis_datos['jornada_ant'])>0:
                    jorn_ant.append({'grupo':item.grupo, 'link':mis_datos['jornada_ant']})
                    
                if mis_datos['jornada_post'] not in jorn_post and len(mis_datos['jornada_post'])>0:
                    jorn_post.append({'grupo':item.grupo, 'link':mis_datos['jornada_post']})

                resultados = resultados + mis_datos['resultados']
                ranking = ranking + mis_datos['ranking']
                playoffs = playoffs + mis_datos['playoffs']
                
            num_match_texto = jornada_texto(sorted(num_match,reverse=False))
                
        except:
            error = True
            num_match_texto = ''

        return {'error':error, 'num_match':num_match_texto,'jornada_ant':jorn_ant, 'jornada_post':jorn_post,
                'resultados':sorted(resultados, key=lambda k: (k['fecha'],k['grupo'],k['home'])),
                'ranking':sorted(ranking, key=lambda k: (k['grupo'],k['rank'])),
                'playoffs':sorted(playoffs, key = lambda k: (k['home']))}

class Resultado:
    def __init__(self, grupo, home, guest, result, status, fecha, link_eventos):
        self.grupo = grupo
        self.home = home
        self.guest = guest
        self.result = result
        self.status = status
        self.fecha = fecha
        self.link_eventos = link_eventos

    def fecha_completa(self):
        locale.setlocale(locale.LC_ALL, 'en_US.utf8')
        fecha_formateada=datetime.strptime(self.fecha[5:][:-9], "%d %b %Y %H:%M")
        locale.setlocale(locale.LC_ALL, '')
        return fecha_formateada

    def convertir_fecha(self):
        valor = self.fecha_completa()
        locale.setlocale(locale.LC_ALL,locale.getlocale())
        return valor.strftime("%A %d ").capitalize()+valor.strftime("%b %y | %H:%Mh").capitalize()

    def parte_partido(self):
        status = self.status
        switcher_parte={'Sin comenzar':'',
                        'Aplazado':'APL',
                        'Descanso':'DES',
                        'Prórroga':'PRO',
                        'Penaltis':'PEN',
                        'Finalizado':'FIN'
                        }

        return switcher_parte.get(status,status[10:])

    def status_partido(self):
        status = self.status
        switcher_status={'Sin comenzar':'Sin comenzar',
                         'Aplazado':'Aplazado',
                         'Descanso':'En juego',
                         'Prórroga':'En juego',
                         'Penaltis':'En juego',
                         'Finalizado':'Finalizado'
                        }

        return switcher_status.get(status,status[:8])

    def obtener_resultado(self):
        resultado = '(-:-)'
        if self.result:
            resultado = '(' + self.result[0].strip() + ')'
        return resultado

    def crear_resultado(self):
        return {'grupo': self.grupo, 'home':self.home, 'guest':self.guest, 'result':self.obtener_resultado(),
                'status':self.status_partido(), 'part':self.parte_partido(),'mas_info':self.link_eventos,
                'fecha':self.fecha_completa(), 'fecha_texto':self.convertir_fecha()}
        
    def obtener_eventos_resultado(self):
        return obtener_eventos(self.link_eventos)
        
class Ranking:
    
    def __init__(self, tipo_liga, name_liga, grupo, rank, color_rank, team, games_played, goal_favor, goal_against, points,mas_info):
        self.tipo_liga = tipo_liga
        self.name_liga = name_liga
        self.grupo = grupo
        self.rank = rank
        self.color_rank = color_rank
        self.team = team
        self.games_played = games_played
        self.goal_favor = goal_favor
        self.goal_against = goal_against
        self.points = points
        self.mas_info = mas_info

    def diferencia_goles(self):
        return int(self.goal_favor) - int(self.goal_against)

    def obtener_color_posicion(self):
        color_posicion = self.color_rank[self.color_rank.find(' ') + 1:255]

        switcher_color = {'pos-campeon' : 'seagreen',
                          'pos-8uefa': 'seagreen',
                          'pos-8conf': 'seagreen',
                          'pos-euro': 'seagreen',
                          'pos-cha': 'mediumblue',
                          'pos-possnext': 'mediumblue',
                          'pos-prev': 'steelblue',
                          'pos-uefa': 'tomato',
                          'pos-16uefa': 'tomato',
                          'pos-prevuef': 'darkviolet',
                          'pos-conf': 'yellowgreen',
                          'pos-16conf': 'yellowgreen',
                          'pos-reuro': 'yellowgreen',
                          'pos-desc': 'red',
                          'pos-nextcha' : 'seagreen',
                          'pos-elimin': 'red',
                          'pos-elimuefa' : 'tomato',
                          'pos-elimconf': 'yellowgreen',
                          'pos-asc':'seagreen',
                          'pos-play': 'mediumblue',
                          'pos-playd': 'darkorange',
                          'pos-playseries': 'seagreen',
                          }

        return switcher_color.get(color_posicion,'transparent')

    def crear_ranking(self):
        return {'grupo':self.grupo, 'rank':self.rank, 'team':self.team, 'games_played':self.games_played,
                'goal_diff':self.diferencia_goles(), 'points':self.points, 'color_ranking': self.obtener_color_posicion(),
                'mas_info':self.mas_info}

class Playoffs:
    def __init__(self, tipo, home, home_win, guest, guest_win, resultado):
        self.tipo = tipo
        self.home = home
        self.home_win = home_win
        self.guest = guest
        self.guest_win = guest_win
        self.resultado = resultado

    def equipo_1(self):
        mi_equipo=''
        if self.home:
            mi_equipo = self.home[0]
        elif self.home_win:
            mi_equipo = self.home_win[0]
        return mi_equipo

    def equipo_2(self):
        mi_equipo=''
        if self.guest:
            mi_equipo = self.guest[0]
        elif self.guest_win:
            mi_equipo = self.guest_win[0]
        return mi_equipo
        
    def crear_playoffs(self):
        return {'tipo':self.tipo, 'home':self.equipo_1(), 'guest':self.equipo_2(), 'resultado':self.resultado}    

def crear_competicion():
    mis_competiciones = []
    for item in COMPETICIONES.keys():
        for item_name in COMPETICIONES[item].keys():
            mis_competiciones.append(Competicion(item,
                                                 item_name,
                                                 crear_grupo(item,item_name)
                                                 )
                                    )
    return mis_competiciones

def crear_grupo(tipo,name):
    mi_grupo = []
    for i in range(len(COMPETICIONES[tipo][name])):
        mi_grupo.append(Grupo_link(tipo, name, COMPETICIONES[tipo][name][i]['grupo'],
                                   COMPETICIONES[tipo][name][i]['link']))
    return mi_grupo

def jornada_texto(lista):
    lista_texto=''

    if len(lista)> 1:
        for i in range(len(lista)):
            lista_texto = lista_texto + lista[i] + '/'
        lista_texto = lista_texto[:-1]
    elif len(lista)==1:
        lista_texto=lista[0]
        
    return lista_texto

def cargar_resultados_url(grupo,link):
    num_jornada = ''
    jornada_ant = ''
    jornada_post = ''
    resultados = []
    playoffs = []
    if len(link)>1:
        url = s.get(URL.format(link))
        tree = html.fromstring(url.content)

        if len(tree.xpath("//div[@id='col-resultados']//div[@class='j_cur']/a/text()"))>0:
            num_jornada=tree.xpath("//div[@id='col-resultados']//div[@class='j_cur']/a/text()")[0]            
            
        if len(tree.xpath("//div[@id='col-resultados']//div[@class='j_ant']/a"))>0:
            jornada_ant = tree.xpath("//div[@id='col-resultados']//div[@class='j_ant']/a/@href")[0]
            

        if len(tree.xpath("//div[@id='col-resultados']//div[@class='j_sig']/a"))>0:
            jornada_post = tree.xpath("//div[@id='col-resultados']//div[@class='j_sig']/a/@href")[0]
        
        rows_resultados_xpath = (tree.xpath("//tr[@class='vevent ']"),tree.xpath("//tr[@class='vevent impar']"))
        rows_playoffs_xpath = tree.xpath("//tr[@class='playoff_total']")
        
        for i in range(2):
            for row in rows_resultados_xpath[i]:
                mi_resultado = Resultado(grupo, row.xpath("./td[@class='equipo1']/a/text()")[0], row.xpath("./td[@class='equipo2']/a/text()")[0],
                                         row.xpath("./td[@class='rstd']/a/span/text()"),row.xpath("./td[@class='fecha']/span/text()")[0],
                                         row.xpath("./td[@class='fecha']/@data-date")[0],
                                         row.xpath("./td[@class='rstd']/a/@href")[0])
                resultados.append(mi_resultado.crear_resultado())
                
        for row in rows_playoffs_xpath:
            mi_playoffs = Playoffs(row.xpath("./td[1]/div/span/text()")[0], row.xpath("./td[@class='equipo1 ']/a/text()"),
                                   row.xpath("./td[@class='equipo1 win']/a/text()"), row.xpath("./td[@class='equipo2 ']/a/text()"),
                                   row.xpath("./td[@class='equipo2 win']/a/text()"), row.xpath("./td[@class='rstd']/span/text()")[0])

            playoffs.append(mi_playoffs.crear_playoffs())
                
    return {'num_jornada':num_jornada, 'jornada_ant':jornada_ant, 'jornada_post':jornada_post,
            'resultados':resultados,'playoffs':playoffs}
grupo_link_serializado = jsonpickle.encode(grupo_link_objeto)
mis_competiciones = crear_competicion()

# Convertir 'mis_competiciones' a un formato JSON serializable
data_json = [competicion.__dict__ for competicion in mis_competiciones]

# Escribir los datos en un archivo JSON
with open('datos_competiciones.json', 'w') as file:
    json.dump(data_json, file, indent=4)

######################################### P R U E B A S #########################################
#
#mis_competiciones=crear_competicion()
#p_mi_grupo = crear_grupo('España','Primera división')
#print(p_mi_grupo[0].link)
#print(mis_competiciones[2].obtener_todo())
#print(mis_competiciones[0].obtener_resultados())
#mi_grupo = ['']
#mi_link = ['/copa_del_rey/grupo0/jornada5']
#print(mis_competiciones[2].obtener_mas_resultados(mi_grupo,mi_link))

#print(mis_competiciones[8].obtener_resultados_anterior())
#print(mis_competiciones[17].obtener_resultados_posterior())
#print(cargar_resultados_url('','/copa_del_rey/grupo0/jornada7'))
#print(mis_competiciones[16].obtener_ranking())
#print(mis_competiciones[2].obtener_playoffs())
