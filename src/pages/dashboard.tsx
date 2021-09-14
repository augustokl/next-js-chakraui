import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts'

import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'

import { Header } from "../components/Header";
import { Sidebar } from '../components/Sidebar';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const pastWeek = Array.from(Array(7).keys())
                  .reverse()
                  .map(days => new Date(Date.now() - 86400000 * days ).toISOString())

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: pastWeek
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.8,
      opacityTo: 0.3
    }
  },
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 101, 18, 34] }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Week Subscribes</Text>
            <Chart options={options} type="area" series={series} height={160}/>
          </Box>
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Opening Rate</Text>
            <Chart options={options} type="area" series={series} height={160}/>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>

  )
}