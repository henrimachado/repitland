import React from "react";
import {
  PoliticaContainer,
  PoliticaDownload,
  PoliticaHeader,
  PoliticaMain,
  Textos,
  VoltarLogin,
} from "./SecurityPolicyNotLogged.style";
import FAC from "../../../components/FAC/FAC";
import { FaFileDownload } from "react-icons/fa";
import PDF from "../Politica-Segurança.pdf";
import { MdDoorFront } from "react-icons/md";
import { PiKeyReturnFill } from "react-icons/pi";
import { useParams } from "react-router-dom";
// import logo from "../../media/logo3.svg";

const SecurityPolicyNotLogged = () => {

  const params = useParams();
  
  return (
    <>
      <PoliticaMain className="animeLeft">
        <PoliticaHeader>
          <h2 className="text-center">Políticas de Segurança</h2>
          {params.loggedUser ? 
            <VoltarLogin href='http://localhost:5000/home'>
              <PiKeyReturnFill />
              <p>Voltar</p>
            </VoltarLogin> 
              : 
            <VoltarLogin href='https://localhost:5001/'>
              <MdDoorFront />
              <p>Login</p>
            </VoltarLogin> 
          }
        </PoliticaHeader>
        <PoliticaContainer>
          <FAC title={"1. Objetivos"}>
            <p>
              Definir diretrizes e normas visando a proteção de informações sob
              posse da Reptilândia a partir dos pilares de confidencialidade,
              integridade e disponibilidade. Além disso, busca garantir que
              qualquer informação, independente do formato ou mecanismo de
              armazenamento, será protegida de forma adequada contra ameaças de
              caráter interno, externo, intencional e/ou acidental.
            </p>
            <p>
              Este documento objetiva definir responsabilidades e fornecer
              orientações necessárias aos funcionários e parceiros sobre o uso
              correto e seguro de informações e recursos tecnológicos que fazem
              parte do exercício da atividade profissional da Reptilândia.
              Ainda, busca se adequar à legislação vigente e aos contratos
              aplicáveis à segurança e privacidade da informação, garantindo
              continuidade do negócio e minimização de danos causados por
              incidentes de segurança da informação.
            </p>
            <p>
              Por fim, esta Política de Segurança da Informação atua em
              conformidade com os interesses estratégicos e empresariais da
              Reptilândia, em busca de minimizar danos sobre a imagem,
              participação no mercado, confiança dos clientes e parceiros e
              continuidade das atividades.
            </p>
          </FAC>

          <FAC title="2. Público Alvo">
            <p>
              Aplica-se a toda e qualquer pessoa que possua acesso às
              informações e recursos tecnológicos da Reptilândia, incluindo
              funcionários, prestadores de serviço e/ou terceiros autorizados
            </p>
          </FAC>

          <FAC title="3. Política de Uso Aceitável">
            <p>
              Os funcionários devem usar os sistemas e recursos de tecnologias
              de informação da empresa de maneira responsável e ética. Isso
              inclui evitar atividades que possam colocar a segurança da rede em
              risco, como visitar sites inseguros ou baixar software não
              autorizado.
            </p>
            <p>
              Qualquer violação da política de uso aceitável será tratada como
              uma violação série e poderá resultar em ações disciplinares.
            </p>
          </FAC>

          <FAC title="4. Responsabilidade">
            <p>
              A qualquer pessoa - funcionário, prestador de serviço ou terceiro
              autorizado -, é atribuída a responsabilidade de adesão e
              efetivação da Política de Segurança da Informação descrita no
              presente documento. Essa responsabilidade inclui a obrigação de
              proteger as informações e os recursos tecnológicos sob posse da
              Reptilândia e que possui acesso, assim como a de reportar
              incidentes e violações de segurança assim que forem observados.
            </p>
            <p>
              O monitoramento, revisão e atualização da política são atividades
              do Comitê de Segurança da Informação da Reptilândia, que também
              será responsável pela investigação de violações e respostas aos
              possíveis incidentes
            </p>
            <p>
              Por fim, qualquer violação à política definida neste documento
              estará sujeita a ações disciplinares conforme a política interna
              da reptilândia e da legislação vigente.
            </p>
          </FAC>

          <FAC title="5. Diretrizes Gerais">
            <Textos>
              <h4>5.1 Classificação e Tratamento da Informação</h4>
              <p>
                Todas as informações devem ser produzidas, mantidas e
                compartilhadas de acordo com os objetivos estratégicos do
                negócio, suas necessidades e apenas por meio de recursos
                autorizados.
              </p>
              <p>
                Todas as informações referentes ao exercício das atividades da
                Reptilândia devem ser protegidas e ter seu acesso garantido
                apenas a pessoas autorizadas e nos momentos necessários.
              </p>
              <p>
                Toda e qualquer informação necessária ao funcionamento da
                empresa será tratada como sensível e prioritária.
              </p>
            </Textos>

            <Textos>
              <h4>5.2 Controle de Acesso</h4>
              <p>
                Serão utilizadas medidas de segurança física e logicamente
                adequadas para proteger as informações e recursos tecnológicos
                da Reptilândia
              </p>
              <p>
                O acesso às informações e recursos seguirá o princípio do menor
                privilégio, fornecendo ao usuário somente o absolutamente
                necessário para o exercício de suas funções.
              </p>
            </Textos>

            <Textos>
              <h4>5.3 Segurança em Recursos Humanos</h4>
              <p>
                A Reptilândia se compromete a fornecer o conhecimento necessário
                sobre segurança da informação para todos os seus funcionários,
                os tornando aptos a reconhecer falhas e vulnerabilidades
              </p>
              <p>
                Todos os funcionários também deverão se tornar cientes desta
                Política de Segurança da Informação e de todas as suas
                atualizações ao longo do tempo.
              </p>
            </Textos>

            <Textos>
              <h4>5.4 Monitoramento e Sanções</h4>
              <p>
                O uso dos recursos tecnológicos da Reptilândia serão monitorados
                e quaisquer descumprimento das obrigações ou violações que
                coloquem em risco a integridade das informações serão tratadas
                com seriedade, sendo aplicadas sanções conforme a natureza da
                violação
              </p>
            </Textos>

            <Textos>
              <h4>5.5 Segurança do Ambiente</h4>
              <p>
                A Reptilândia se compromete a garantir que o projeto das áreas
                de trabalho sejam feitos de forma a minimizar o risco de dano
                aos equipamentos e ativos, considerando questões da segurança
                física e garantia da disponibilidade dos recursos a qualquer
                momento.
              </p>
            </Textos>
          </FAC>

          <FAC title="6. Diretrizes Específicas">
            <Textos>
              <h4>6.1 Tratamento das Informações e Recursos Tecnológicos</h4>
              <Textos className="mb-10">
                <h5>
                  6.1.1 Normas Relaticas ao Tratamento das Informações e
                  Recursos Tecnológicos
                </h5>
                <p>
                  Devem ser definidas categorias de relevância e sensibilidade
                  das informações, que serão utilizadas para a definição dos
                  direitos de acesso para cada funcionário conforme a
                  necessidade.
                </p>
                <p>
                  Devem ser definidas categorias de usuários com base nas
                  responsabilidades e funções exercidas pelos membros da
                  Reptilândia.
                </p>
                <p>
                  Toda e qualquer informação produzida e armazenada na
                  Reptilândia deverá ser utilizada somente para fins que atendam
                  aos objetivos profissionais e estratégicos da empresa
                </p>
                <p>
                  Toda e qualquer informação utilizada pela Reptilândia para o
                  exercício de suas atividades deve estar acessível quando
                  necessário, sendo aplicados mecanismos de recuperação de
                  informação para casos de perda.
                </p>
                <p>
                  É vedada a transmissão de informações a terceiros,
                  independentemente do meio, bem como reprodução, cópia,
                  utilização ou exploração de informações de posse da
                  Reptilândia sem autorização prévia da presidência e/ou
                  vice-presidência, ou do Comitê de Segurança.
                </p>
              </Textos>

              <Textos className="mb-10">
                <h5>
                  6.1.2 Procedimentos Relativos ao Tratamento das Informações e
                  Recursos Tecnológicos
                </h5>
                <p>
                  Todo e qualquer usuário terá acesso somente ao mínimo
                  necessário para a realização de suas atividades, sendo baseado
                  nas suas funções e na sensibilidade das informações.
                </p>
                <p>
                  Toda informação e qualquer informação deverá possuir cópias
                  digitais armazenadas nos servidores principais e de backup,
                  sendo realizado o backup ao início e final do dia
                </p>
                <p>
                  Toda informação registrada em meio físico como, mas não
                  exclusivamente, notas fiscais e recibos, deverão ser
                  descartadas após um período de dois meses ou armazenadas de
                  forma que as políticas de controle de acesso se façam
                  presentes.
                </p>
                <p>
                  Toda e qualquer informação produzida, coletada e armazenada na
                  Reptilândia deverá possuir ao menos uma cópia em servidores de
                  backup desconectados da internet.
                </p>
                <p>
                  Ao desligamento de um colaborador, suas informações deverão
                  ser anonimizadas após 30 dias do desligamento, incluindo em
                  sistemas de backup.
                </p>
                <p>
                  Durante o desligamento do colaborador, o mesmo deverá retornar
                  todo e qualquer dispositivo disponibilizado pela empresa e que
                  está em sua posse. Esses dispositivos, após realizadas as
                  devidas extrações de informação, deverão ser formatados antes
                  que possam ser reutilizados por outros colaboradores.
                </p>
              </Textos>
            </Textos>

            <Textos>
              <h4>6.2 Segurança quanto a Recursos Humanos</h4>
              <Textos className="mb-10">
                <h5>
                  6.2.1 Normas Relativas à Segurança quanto a Recursos Humanos
                </h5>
                <p>
                  Todo e qualquer membro colaborador da Reptilândia deverá
                  participar dos treinamentos sobre Segurança da Informação
                  fornecidos pela empresa.
                </p>
                <p>
                  Todo e qualquer membro da Reptilândia que possua acesso aos
                  recursos tecnológicos e informações deverá ter apenas uma
                  única identificação, salvo por exceções que forem documentadas
                  e aprovadas pelo Comitê de Segurança.
                </p>
                <p>
                  Todo e qualquer membro colaborador da Reptilândia, no momento
                  de contratação, deverá assinar a Declaração de
                  Responsabilidade Sobre Informações e Recursos Tecnológicos
                </p>
                <p>
                  Todo e qualquer membro colaborador da Reptilândia deverá ter
                  acesso às possíveis sanções às quais estão sujeitos em caso de
                  violação das políticas estabelecidas por este documento e
                  pelos demais documentos contratuais aqui mencionados.
                </p>
              </Textos>

              <Textos className="mb-10">
                <h5>
                  6.2.2 Procedimentos Relativos à Segurança quanto a Recursos
                  Humanos
                </h5>
                <p>
                  Treinamentos sobre Segurança de Informação deverão ser
                  ministrados com uma recorrência semestral a todos os
                  colaboradores da Reptilândia.
                </p>
                <p>
                  O fornecimento de identificações adicionais deverá passar pela
                  avaliação do Comitê de Segurança e deverão ser documentados e
                  armazenados, incluindo cópias para a presidência e para o
                  colaborador que solicitou o acesso.
                </p>
                <p>
                  Cada colaborador terá um prazo de até 7 dias após a publicação
                  deste documento para assinar a Declaração de Responsabilidade
                  Sobre Informações e Recursos Tecnológicos, sob pena de
                  desligamento.
                </p>
                <p>
                  Qualquer candidato à vaga, caso seja escolhido, deverá
                  obrigatoriamente assinar a Declaração de Responsabilidade
                  Sobre Informações e Recursos Tecnológicos antes de receber
                  seus equipamentos e credenciais de acesso.
                </p>
              </Textos>
            </Textos>

            <Textos>
              <h4>
                6.3 Segurança Lógica da Informação e dos Recursos Tecnológicos
              </h4>
              <Textos className="mb-10">
                <h5>
                  6.3.1 Normas Relativas à Segurança Lógica da Informação e dos
                  Recursos Tecnológicos
                </h5>
                <p>
                  Todo e qualquer acesso aos serviços e dados deve ser protegido
                  por senhas individuais e intransferíveis.
                </p>
                <p>
                  O compartilhamento de senhas é explicitamente proibido,
                  estando sujeito a sanções que podem variar de acordo com o
                  impacto causado pela ação.
                </p>
                <p>
                  É dever de cada membro colaborador o armazenamento adequado e
                  seguro de suas senhas.
                </p>
                <p>
                  Em caso de tentativas recorrentes e mal sucedidas de acesso ao
                  sistema, o acesso deverá ser bloqueado imediatamente.
                </p>
                <p>
                  O colaborador jamais deverá deixar sua estação de trabalho
                  desatendida e com a conta logada.
                </p>
                <p>
                  O acesso aos sistemas de informação deverá ocorrer somente
                  através dos dispositivos oficiais da Reptilândia.
                </p>
                <p>
                  Ex-colaboradores deverão ter seus acessos ao sistema
                  completamente bloqueados.
                </p>
              </Textos>

              <Textos className="mb-10">
                <h5>
                  6.3.2 Procedimentos Relativos à Segurança Lógica da Informação
                  e dos Recursos Tecnológicos
                </h5>
                <p>
                  As senhas de acesso aos sistemas deverão ser atualizadas a
                  cada, no máximo, 30 dias.
                </p>
                <p>
                  Serão consideradas senhas fortes aquelas que não são triviais
                  ou previsíveis, com um tamanho mínimo de 8 caracteres e
                  formadas a partir da combinação de letras maiúsculas,
                  minúsculas, números e caracteres especiais.
                </p>
                <p>
                  As senhas deverão ser criptografadas e gravadas separadamente
                  dos arquivos de dados, em ambiente de acesso restrito.
                </p>
                <p>
                  Após um máximo de três tentativas de acesso ao sistema sem
                  sucesso, o acesso deverá ser bloqueado até que seja solicitado
                  o desbloqueio pelo colaborador ao Comitê de Segurança.
                </p>
                <p>
                  Somente dispositivos oficiais da empresa serão liberados para
                  o acesso à rede que realiza a transmissão de dados da empresa,
                  ficando expressamente proibida o desbloqueio de dispositivos
                  pessoais para tanto
                </p>
                <p>
                  Após o desligamento do colaborador, todos os seus acessos
                  devem ser bloqueados imediatamente e senhas alteradas pelo
                  administrador do sistema.
                </p>
              </Textos>

              <Textos className="mb-10">
                <h5>6.3.3 Normas Relativas às Regras de Firewall</h5>
                <p>
                  As regras de Firewall devem ser configuradas para permitir
                  apenas o tráfego necessário para a operação da empresa.
                </p>
                <p>
                  As portas não utilizadas devem ser fechadas e os IPs devem ser
                  filtrados para garantir que apenas dispositivos confiáveis
                  tenham acesso à rede.
                </p>
                <p>
                  Além disso, pacotes devem ser inspecionados para evitar a
                  entrada de malware ou outros tipos de tráfego malicioso.
                </p>
              </Textos>

              <Textos className="mb-10">
                <h5>6.3.4 Proteção contra Malware</h5>
                <p>
                  Todos os sistemas devem ter software antivírus instalado e
                  atualizado regularmente.
                </p>
                <p>
                  Medidas devem ser tomadas para proteger contra spyware e
                  outras formas de malware, como implementação de filtros de
                  conteúdo e a educação dos funcionários sobre práticas seguras
                  de navegação na web.
                </p>
              </Textos>
            </Textos>

            <Textos>
              <h4>
                6.4 Segurança Física da Informação e dos Recursos Tecnológicos
              </h4>
              <Textos className="mb-10">
                <h5>
                  6.4.1 Normas Relativas à Segurança Física da Informação e dos
                  Recursos Tecnológicos
                </h5>
                <p>
                  Todos os equipamentos e dispositivos tecnológicos utilizados
                  na Reptilândia devem ser armazenados em locais seguros,
                  protegidos contra danos físicos, roubo ou acesso não
                  autorizado
                </p>
                <p>
                  Em caso de perda, furto ou falha técnica de todo e qualquer
                  dispositivo da Reptilândia, estando incluídos aqueles
                  fornecidos para cada colaborador (quando necessário) deverão
                  ser reportadas imediatamente após o fato para o Comitê de
                  Segurança
                </p>
                <p>
                  As instalações que abrigam os servidores de rede e de backup
                  devem ser protegidas por controles de acesso físico.
                </p>
                <p>
                  Todos os sistemas da empresa devem contar com dispositivos de
                  energia reserva para casos de emergência.
                </p>
                <p>
                  Nenhum equipamento deverá ser retirado das instalações da
                  Reptilândia sem aprovação explícita e documentada do Comitê de
                  Segurança
                </p>
              </Textos>

              <Textos className="mb-10">
                <h5>
                  6.4.2 Procedimentos Relativos à Segurança Física da Informação
                  e dos Recursos Tecnológicos
                </h5>
                <p>
                  O acesso às áreas onde os equipamentos e dispositivos
                  tecnológicos, especialmente de servidores de rede e
                  armazenamento primário e secundário, deverá ser permitido
                  somente a usuários autorizados pelo Comitê de Segurança,
                  mediante uso de cartão magnético e/ou biometria
                </p>
                <p>
                  Situações de perda, furto ou falha técnica deverão ser
                  reportadas ao Comitê de Segurança imediatamente após, salvo
                  por situações extraordinárias, sob pena de aplicação de
                  sanções.
                </p>
                <p>
                  Todos os dispositivos da empresa devem estar conectados a
                  dispositivos de Nobreak com potencial suficiente para garantir
                  a continuidade do funcionamento até que seja desligado de
                  forma adequada e segura em caso de desligamento de rede
                  elétrica.
                </p>
                <p>
                  A retirada de qualquer equipamento das premissas da
                  Reptilândia deverá ser feita mediante solicitação e aprovação
                  do Comitê de Segurança, com devida documentação e assinatura
                  de termos de responsabilidade
                </p>
                <p>
                  A integridade das câmeras de segurança e fechaduras das
                  instalações deverá ser verificada regularmente, com
                  recorrência semanal.
                </p>
              </Textos>
            </Textos>

            <Textos>
              <h4>6.5 Uso dos Recursos Fornecidos pela Empresa</h4>
              <Textos className="mb-10">
                <h5>
                  6.5.1 Normas Relativas ao Uso dos Recursos Fornecidos pela
                  Empresa
                </h5>
                <p>
                  Contas empresariais fornecidas pela Reptilândia deverão ser
                  acessadas somente por dispositivos credenciados e fornecidos
                  pela empresa e utilizadas somente em função dos objetivos
                  estratégicos e profissionais da Reptilândia.
                </p>
                <p>
                  É vedada a utilização das contas empresariais em aplicativos
                  de redes sociais e derivados, salvo para quando é necessário
                  para a continuidade das atividades da empresa.
                </p>
                <p>
                  Todo e qualquer dispositivo fornecido pela empresa deve ser
                  protegido com senha e criptografia, sendo fortemente
                  recomendado que o armazenamento de informações sensíveis seja
                  minimizado nesses dispositivos
                </p>
                <p>
                  É proibido o uso dos recursos tecnológicos fornecidos pela
                  Reptilândia para o download de arquivos da internet,
                  especialmente de ambientes suspeitos ou que não possuam
                  relação com o exercício das funções do colaborador e com os
                  objetivos da empresa
                </p>
                <p>
                  Em nenhuma circunstância será permitido o uso da rede e dos
                  recursos tecnológicos para acesso a conteúdos nocivos como
                  pornografia e plataformas de jogos.
                </p>
              </Textos>

              <Textos className="mb-10">
                <h5>
                  6.5.2 Procedimentos Relativos ao Uso dos Recursos Fornecidos
                  pela Empresa
                </h5>
                <p>
                  Qualquer uso de contas empresariais para acesso a redes
                  sociais, quando em função das atividades da empresa, deverá
                  passar pela aprovação do Comitê de Segurança e ser devidamente
                  documentado.
                </p>
                <p>
                  Todos os downloads realizados em dispositivos fornecidos pela
                  empresa deverão ser verificados por um software de antivírus
                  definido pela empresa antes de serem abertos ou executados.
                </p>
                <p>
                  Todos os dispositivos fornecidos pela empresa deverão,
                  obrigatoriamente, bloquear o acesso a recursos, sites e
                  aplicativos conhecidos por serem inseguros e/ou nocivos.
                </p>
              </Textos>
            </Textos>

            <Textos>
              <h4>6.6 Acesso por Prestadores de Serviço</h4>
              <Textos className="mb-10">
                <h5>
                  6.6.1 Normas Relativas ao Acesso por Prestadores de Serviço
                </h5>
                <p>
                  O acesso de recursos tecnológicos e informações da Reptilândia
                  por parte de prestadores de serviços deverá ser feito de forma
                  temporária, com permissões limitadas.
                </p>
                <p>
                  Todo e qualquer prestador de serviço deverá assinar um Termo
                  de Responsabilidade sobre Informações e Recursos Tecnológicos
                  no momento de sua contratação antes que tenha acesso aos
                  recursos disponibilizados pela empresa.
                </p>
                <p>
                  Os prestadores de serviço só poderão acessar os sistemas da
                  Reptilândia por meio de dispositivos fornecidos ou aprovados
                  pela empresa.
                </p>
              </Textos>

              <Textos className="mb-10">
                <h5>
                  6.6.2 Procedimentos Relativos ao Acesso por Prestadores de
                  Serviço
                </h5>
                <p>
                  Prestadores de serviço que se recusarem a assinar o Termo de
                  Responsabilidade sobre Informações e Recursos Tecnológicos
                  terão sua contratação revogada.
                </p>
                <p>
                  A concessão de acesso temporário aos sistemas e informações
                  deverá ser realizada pelo Comitê de Segurança, após aprovação
                  da contratação e assinatura do Termo de Responsabilidade sobre
                  Informações e Recursos Tecnológicos
                </p>
                <p>
                  Todos os dispositivos utilizados pelos prestadores de serviços
                  deverão ser recolhidos após o término das funções e, feita a
                  extração de qualquer informação relevante, deverão ser
                  formatados antes de serem utilizados novamente.
                </p>
                <p>
                  Todos os dispositivos utilizados pelos prestadores de serviço
                  deverão ter acesso mínimo, somente ao absolutamente necessário
                  para execução das atividades.
                </p>
              </Textos>
            </Textos>

            <Textos>
              <h4>
                6.7 Normas de Aquisição, Manutenção e Descarte de Equipamentos e
                Sistemas
              </h4>
              <Textos className="mb-10">
                <h5>
                  6.7.1 Normas Relativas à Aquisição, Manutenção e Descarte de
                  Equipamentos e Sistemas
                </h5>
                <p>
                  Os equipamentos devem ser regularmente inspecionados em busca
                  de vulnerabilidades e falhas físicas ou de sistema.
                </p>
                <p>
                  As instalações de servidores de rede e armazenamento de dados
                  devem ser adequadamente construídas conforme necessidades
                  desses equipamentos, incluindo aspectos como refrigeração,
                  fonte de energia reserva e sistema elétrico
                </p>
                <p>
                  Os softwares utilizados nos equipamentos e sistemas da
                  Reptilândia devem ser licenciados e atualizados regularmente.
                </p>
                <p>
                  O descarte de equipamentos e sistemas antigos deve ser feito
                  de maneira segura e ambientalmente responsável
                </p>
              </Textos>

              <Textos>
                <h5>
                  6.7.2 Procedimentos Relativos à Aquisição, Manutenção e
                  Descarte de Equipamentos e Sistemas
                </h5>
                <p>
                  A inspeção dos equipamentos deverá ser realizada por uma
                  equipa credenciada e aprovada pelo Comitê de Segurança, que
                  será acompanhada por um dos membros.
                </p>
                <p>
                  O encontro de qualquer irregularidade deverá ser reportado ao
                  Comitê de Segurança imediatamente após a descoberta, para que
                  seja investigada e resolvida o mais brevemente possível
                </p>
                <p>
                  Os softwares utilizados pela Reptilândia deverão passar por
                  rotinas de atualização com periodicidade no máximo bimestral.
                </p>
                <p>
                  Aspectos relativos a ameaças de incêndio, rede elétrica e
                  controle de temperatura deverão ser considerados na construção
                  das instalações que comportam dispositivos sensíveis.
                </p>
                <p>
                  Todos os equipamentos que forem passíveis de descarte devem
                  passar por rotinas de limpeza dos dados, removendo peças como
                  HD e SSD antes do descarte. Essas peças deverão ser
                  devidamente destruídas.
                </p>
              </Textos>
            </Textos>
          </FAC>

          <FAC title="7. Sanções aplicáveis">
            <p>
              O descumprimento de qualquer uma das diretrizes estabelecidas
              nesta Política de Segurança da Informação e em quaisquer outras
              que venham a complementar ou modificar oficialmente este
              documento, será considerado uma violação séria e poderá resultar
              em ações disciplinares. As sanções aplicáveis dependem da
              gravidade da violação e podem incluir, além de outras, as
              consequências a seguir:
            </p>
            <ul>
              <li>
                <strong>1. Treinamento adicional:</strong>Toda e qualquer
                violação que não resulte imediatamente no desligamento do
                funcionário poderá incluir treinamentos adicionais sobre
                segurança como parte da sanção;
              </li>
              <li>
                <strong>2. Advertência formal:</strong>Violações menores ou
                primeiras ofensas que possuem baixíssimo ou nenhum impacto
                comprovado poderão ser tratadas com a emissão de uma advertência
                formal;
              </li>
              <li>
                <strong>3. Suspensão temporária:</strong>Para violações mais
                graves, a suspensão temporária do funcionário poderá ser
                imposta, com período a ser determinado de acordo com a natureza
                e gravidade da violação;
              </li>
              <li>
                <strong>4. Desligamento</strong>Em casos de violações graves ou
                recorrentes, a demissão pode ser uma ação disciplinar apropriada
                e poderá ocorrer sem aviso prévio;
              </li>
              <li>
                <strong>5. Ação Legal:</strong>Ações que envolvam atividades
                ilegais, como roubo ou uso não autorizado de informações, que
                coloquem em risco a integridade do negócio, incluindo seus
                colaboradores e clientes, bem como sua imagem, estarão sujeitas
                a ações legais contra o perpetuador.
              </li>
            </ul>
            <p>
              A decisão sobre as sanções a serem aplicadas serão tomadas com
              base na legislação vigente e dos procedimentos internos da
              Reptilândia. Todos os funcionários possuem o direito de apelar
              contra qualquer ação disciplinar tomada contra eles, sendo a
              decisão final crivo da alta administração após a investigação dos
              fatos e evidências
            </p>
          </FAC>

          <FAC title="8. Gerenciamento de Incidentes de Segurança">
            <p>
              Em caso de incidente de segurança, o Comitê de Segurança deve ser
              notificado imediatamente. O incidente será investigado e medidas
              serão tomadas para mitigar o impacto.
            </p>
            <p>
              Após a resolução do incidente, uma análise pós-incidente deve ser
              realizada para aprender com o evento e melhorar as práticas de
              segurança.
            </p>
          </FAC>

          <FAC title="9. Vigência e Revisão da Política">
            <p>
              Esta Política de Segurança da Informação entrará em vigência
              imediatamente após a sua publicação e disponibilização para todos
              os funcionários e membros da Reptilândia.
            </p>
            <p>
              Esta Política de Segurança da Informação será revisada anualmente,
              ou conforme necessário, pelo Comitê de Segurança para garantir que
              continue relevante e eficaz no contexto da Reptilândia.
            </p>
            <p>
              A sua atualização irá considerar quaisquer incidentes de segurança
              ocorridos, feedbacks dos funcionários, mudanças na legislação ou
              normas e novas ameaças ou vulnerabilidades identificadas
            </p>
            <p>
              Por fim, todas as alterações serão comunicadas a todos os
              funcionários e partes interessadas relevantes.
            </p>
          </FAC>
        </PoliticaContainer>
        <PoliticaDownload href={PDF} download>
          <p>Baixar Política de Segurança</p>
          <FaFileDownload />
        </PoliticaDownload>
      </PoliticaMain>
    </>
  );
};

export default SecurityPolicyNotLogged;
