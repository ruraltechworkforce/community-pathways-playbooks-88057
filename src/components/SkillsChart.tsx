import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillData {
  skill: string;
  demand: number;
  community: string;
}

interface SkillsChartProps {
  data: SkillData[];
  title: string;
  type?: 'bar' | 'pie';
}

const COLORS = [
  'hsl(var(--ada))',
  'hsl(var(--chambers))',
  'hsl(var(--cochise))',
  'hsl(var(--selma))',
  'hsl(var(--taos))',
  'hsl(var(--wilson))',
];

export function SkillsChart({ data, title, type = 'bar' }: SkillsChartProps) {
  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={300} minHeight={250}>
      <BarChart 
        data={data} 
        margin={{ top: 20, right: 10, left: 10, bottom: 60 }}
        aria-label={`Bar chart showing ${title}`}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="skill" 
          stroke="hsl(var(--muted-foreground))"
          angle={-45}
          textAnchor="end"
          height={80}
          fontSize={10}
          interval={0}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))" 
          fontSize={10}
          label={{ value: '% of Employers', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'hsl(var(--muted-foreground))' } }}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--card-foreground))',
            fontSize: '12px'
          }}
        />
        <Bar 
          dataKey="demand" 
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderPieChart = () => (
    <ResponsiveContainer width="100%" height={350} minHeight={300}>
      <PieChart aria-label={`Pie chart showing ${title}`}>
        <Pie
          data={data}
          cx="50%"
          cy="45%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="demand"
          label={({ skill, percent }) => `${(percent * 100).toFixed(0)}%`}
          labelLine={true}
          fontSize={10}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend 
          verticalAlign="bottom" 
          height={60}
          wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }}
          formatter={(value, entry: any) => (
            <span style={{ color: 'hsl(var(--foreground))' }}>
              {entry.payload.skill}
            </span>
          )}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--card-foreground))',
            fontSize: '12px'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );

  return (
    <Card className="glass-card shadow-custom" role="img" aria-label={title}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {type === 'bar' ? renderBarChart() : renderPieChart()}
      </CardContent>
    </Card>
  );
}