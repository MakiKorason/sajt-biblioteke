# -*- coding: utf-8 -*-
path = r'src/components/Books/Recommendations.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract Schlink body from top monthly section
top_marker = '<strong>Наслов: „Читач“</strong>'
top_idx = content.find(top_marker)
if top_idx == -1:
    raise SystemExit('top marker not found')

text_start = content.find('Роман „Читач“', top_idx)
text_end = content.find('Топла препорука свима који желе', text_start)
if text_start == -1 or text_end == -1:
    raise SystemExit('top text bounds not found')

original_body = content[text_start:text_end].strip()
closing = 'Топла преporuka svima koji zele da citaju delo koje podstice na razmisljanje i ostavlja snažan utisak.'
# get full closing from file
closing_start = text_end
closing_end = content.find('</p>', closing_start)
full_closing = content[closing_start:closing_end].strip()

jun_marker = "{activeKey === 'jun' && ("
jun_idx = content.find(jun_marker)
if jun_idx == -1:
    raise SystemExit('jun block not found')

jun_p = content.find('<strong>Наслов:</strong> „Читач"', jun_idx)
jun_text_start = content.find('Роман „Читач“', jun_p)
jun_text_end = content.find('</p>', jun_text_start)

new_jun_body = original_body + '\n\n   ' + full_closing
content = content[:jun_text_start] + new_jun_body + content[jun_text_end:]

# Replace top monthly with Meduze (from maj archive)
meduze_start = content.find('{activeKey === \'maj\' && (')
meduze_block_end = content.find(')}', content.find('</Row>', meduze_start)) + 2
meduze_block = content[meduze_start:meduze_block_end]

# Extract inner row from meduze block (without activeKey wrapper)
inner_start = meduze_block.find('<Row>')
inner_end = meduze_block.rfind('</Row>') + len('</Row>')
meduze_inner = meduze_block[inner_start:inner_end]

top_section_start = content.find('<h3 className="container-title" style={{ fontSize: \'clamp(1.4rem, 4vw, 2.2rem)\' }}>Месечна препорука романа</h3>')
top_row_start = content.find('<Row>', top_section_start)
top_row_end = content.find('</Row>', top_row_start) + len('</Row>')

new_top = f'''<h3 className="container-title" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)' }}>Месечна препорука романа</h3>
        {meduze_inner}'''

content = content[:top_section_start] + new_top + content[top_row_end:]

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)

print('Done')
